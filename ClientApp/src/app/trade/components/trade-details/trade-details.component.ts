import { Component, OnInit } from '@angular/core';
import { Trade, TradeStatus, TradeAddModel } from '../../models/trade.model';
import { Router } from '@angular/router';
import { Book } from 'src/app/book/models/book.model';
import { BooksService } from 'src/app/book/services/books.service';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { AuthService } from 'src/app/auth/services/auth.service';
import { pipe } from 'rxjs';
import { TradesService } from '../../services/trades.service';
import { Comment } from '../../models/comment.model';

// tslint:disable:variable-name

@UntilDestroy()
@Component({
  selector: 'app-trade-details',
  templateUrl: './trade-details.component.html',
  styleUrls: ['./trade-details.component.scss']
})
export class TradeDetailsComponent implements OnInit {

  trade: Trade;
  targetBook: Book;
  offer: Book;
  booksSourceId: number;

  creationMode: boolean;
  private _canAccept: boolean;
  private _canSend: boolean;
  isUserInitiator: boolean;
  acceptDisabled: boolean;
  sendDisabled: boolean;
  canChangeOffer: boolean;
  tradeClosed: boolean;

  get canAccept(): boolean {
    return this._canAccept;
  }

  set canAccept(val: boolean) {
    this._canAccept = val;
    this._canSend = !this._canAccept;
  }

  get canSend(): boolean {
    return this._canSend;
  }

  set canSend(val: boolean) {
    this._canSend = val;
    this._canAccept = !this._canSend;
  }

  get userName(): string {
    return this.authService.userName;
  }


  constructor(
    private router: Router,
    private authService: AuthService,
    private tradesService: TradesService,
  ) { }

  ngOnInit(): void {
    const tradeId = +this.router.url.split('/').pop();
    if (tradeId) {
      this.tradesService.getTrade(tradeId)
        .pipe(untilDestroyed(this))
        .subscribe(x => {
          this.trade = x;
          this.creationMode = false;
          this.targetBook = this.trade.target;
          this.offer = this.creationMode ? null : this.trade.initiatorOffer;
          this.isUserInitiator = this.creationMode || this.trade.initiator.id === this.authService.userId;
          this.booksSourceId = this.isUserInitiator ? this.authService.userId : this.trade.initiator.id;
          this.resolveVisiblityFlags(this.trade, this.creationMode);

        });
    } else {
      this.trade = history.state.data.trade as Trade;
      this.creationMode = !!history.state.data.creationMode;
      this.targetBook = this.creationMode ? history.state.data.targetBook : this.trade.target;
      this.offer = this.creationMode ? null : this.trade.initiatorOffer;
      this.isUserInitiator = this.creationMode || this.trade.initiator.id === this.authService.userId;
      this.booksSourceId = this.isUserInitiator ? this.authService.userId : this.trade.initiator.id;
      this.resolveVisiblityFlags(this.trade, this.creationMode);
    }
  }


  onAccept(): void {
    this.trade.status = TradeStatus.Accepted;
    this.tradesService.updateTrade(this.trade)
      .pipe(untilDestroyed(this))
      .subscribe(x => this.ngOnInit());
  }

  onReject(): void {
    if (this.creationMode) {
      this.router.navigate(['/books']);
    } else {
      this.trade.status = TradeStatus.Rejected;
      this.tradesService.updateTrade(this.trade)
        .pipe(untilDestroyed(this))
        .subscribe(x => this.ngOnInit());
    }
  }

  onSendOffer(): void {
    if (this.creationMode) {
      const tradeAddModel: TradeAddModel = {
        status: TradeStatus.New,
        initiator: this.authService.userId,
        initiatorOffer: this.offer.id,
        targetOwner: this.targetBook.owner.id,
        target: this.targetBook.id,
        comments: []
      };
      this.tradesService.addTrade(tradeAddModel)
        .pipe(untilDestroyed(this))
        .subscribe(x => {
          this.ngOnInit();
        });
    } else {
      this.trade.status = this.isUserInitiator ? TradeStatus.New : TradeStatus.Counteroffer;
      this.trade.initiatorOffer = this.offer;
      this.tradesService.updateTrade(this.trade)
        .pipe(untilDestroyed(this))
        .subscribe(x => {
          this.ngOnInit();
        });
    }
  }

  onBookChange(book: Book): void {
    this.offer = book;
    this.sendDisabled = false;
    this.canSend = true;

    if (this.trade && this.trade.initiatorOffer.id === this.offer.id) {
      this.sendDisabled = true;
      this.canAccept = !this.isUserInitiator;
    }
  }

  onCommentSend(text: string): void {
    const newComment: Comment = {
      id: -1,
      commentAuthor: {id: this.authService.userId, name: this.userName},
      text,
      creationDate: '01-01-2020',
      tradeId: this.trade.id,
    };
    this.tradesService.addComment(newComment)
      .pipe(untilDestroyed(this))
      .subscribe(x => {
        this.ngOnInit();
      });
  }

  resolveVisiblityFlags(trade: Trade, creationMode: boolean): void {
    this.canChangeOffer = creationMode
      || (this.isUserInitiator && trade.status === TradeStatus.Counteroffer)
      || (!this.isUserInitiator && trade.status === TradeStatus.New);

    if (creationMode) {
      this.canSend = true;
      this.sendDisabled = true;
    } else {
      switch (trade.status) {
        case 'NEW':
          if (this.isUserInitiator) {
            this.acceptDisabled = true;
          } else {
            this.acceptDisabled = false;
          }
          this.canAccept = true;
          break;

        case 'CONTEROFFER':
          if (this.isUserInitiator) {
            this.acceptDisabled = false;
          } else {
            this.acceptDisabled = true;
          }
          this.canAccept = true;
          break;

        default:
          this.tradeClosed = true;
          this.canAccept = true;
          this.acceptDisabled = true;
          break;
      }
    }
  }

}
