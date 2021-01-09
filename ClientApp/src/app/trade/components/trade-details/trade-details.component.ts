import { Component, OnInit } from '@angular/core';
import { Trade, TradeStatus } from '../../models/trade.model';
import { Router } from '@angular/router';
import { Book } from 'src/app/book/models/book.model';
import { BooksService } from 'src/app/book/services/books.service';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';


@Component({
  selector: 'app-trade-details',
  templateUrl: './trade-details.component.html',
  styleUrls: ['./trade-details.component.scss']
})
export class TradeDetailsComponent implements OnInit {

  trade: Trade;
  targetBook: Book;
  offer: Book;

  creationMode: boolean;
  offerChanged: boolean;
  canAccept: boolean;

  constructor(
    private router: Router,
    private booksService: BooksService,
  ) { }

  ngOnInit(): void {
    this.trade = history.state.data.trade as Trade;
    this.creationMode = !!history.state.data.creationMode;
    this.targetBook = this.creationMode ? history.state.data.targetBook : this.trade.target;
    this.canAccept = this.trade && this.trade.status === TradeStatus.CounterofferReceived;
  }

  onAccept(): void {
    // TODO implement me
  }

  onReject(): void {
    // TODO implement me
  }

  onSendOffer(): void {
    // TODO implement me
  }

  onBookChange(book: Book): void {
    if (this.creationMode || (this.offer && this.offer.id !== book.id)) {
      this.offer = book;
      this.offerChanged = true;
    }
  }

}
