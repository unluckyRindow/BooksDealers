import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Trade } from '../models/trade.model';

@Injectable({
  providedIn: 'root'
})
export class TradesService {
  readonly API_URL;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    this.API_URL = this.authService.API_URL;
  }

  getUserTrades(): Observable<any> {
    return this.http.get(this.API_URL + 'api/trades/user-trades/' + this.authService.userId, this.authService.GetHeaders());
  }

  getTrade(id: number): Observable<any> {
    return this.http.get(this.API_URL + 'api/trades/' + id, this.authService.GetHeaders());
  }

  updateTrade(trade: Trade): Observable<any> {
    return this.http.put(this.API_URL + 'api/trades/' + trade.id, this.authService.GetHeaders());
  }

  addTrade(trade: Trade): Observable<any> {
    return this.http.post(this.API_URL + 'api/trades', JSON.stringify(trade), this.authService.GetHeaders());
  }
}
