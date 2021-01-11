import { Injectable } from '@angular/core';
import { Observable, of, zip } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Trade, TradeAddModel } from '../models/trade.model';
import { map } from 'rxjs/operators';
import { BooksService } from 'src/app/book/services/books.service';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class TradesService {
  readonly API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private bookService: BooksService,
  ) {
    this.API_URL = this.authService.API_URL;
  }

  getUserTrades(): Observable<any> {
    const id = this.authService.userId;
    return this.http.get(this.API_URL + 'api/trades/user-trades/' + id, this.authService.GetHeaders());
  }

  getTrade(id: number): Observable<any> {
    return this.http.get(this.API_URL + 'api/trades/' + id, this.authService.GetHeaders());
  }

  updateTrade(trade: Trade): Observable<any> {
    return this.http.put(this.API_URL + 'api/trades/' + trade.id, JSON.stringify(trade), this.authService.GetHeaders());
  }

  addTrade(trade: TradeAddModel): Observable<any> {
    return this.http.post(this.API_URL + 'api/trades', JSON.stringify(trade), this.authService.GetHeaders());
  }

  addComment(comment: Comment): Observable<any> {
    return this.http.post(this.API_URL + 'api/trades/comments', JSON.stringify(comment), this.authService.GetHeaders());
  }
}
