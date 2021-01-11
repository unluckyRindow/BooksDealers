import { Injectable } from '@angular/core';
import { Book, BookStatus, LiteraryGenre } from '../book/models/book.model';
import { Observable, of } from 'rxjs';
import { Trade, TradeStatus } from '../trade/models/trade.model';

@Injectable({
  providedIn: 'root'
})
export class MockedService {

  readonly TRADES = [
    {
      id: 1,
      status: TradeStatus.New,
      lastUpdated: '11-12-2020',
      creationDate: '10-11-2020',
      initiator: {id: 1, name: 'Some Initiator'},
      initiatorOffer: {},
      targetOwner: {id: 2, name: 'Some Target Owner'},
      target: {id: 1, author: 'Author here', title: 'Title here', category: 'FICTION'},
      comments: []
    },
    {
      id: 1,
      status: TradeStatus.Rejected,
      lastUpdated: '11-12-2020',
      creationDate: '10-11-2020',
      initiator: {id: 1, name: 'Some Initiator 2'},
      initiatorOffer: {},
      targetOwner: {id: 2, name: 'Some Target Owner 2'},
      target: {id: 1, author: 'Author here 2', title: 'Title here 2', category: 'FICTION'},
      comments: []
    },
  ];

  constructor() { }


  getAllTrades(): Observable<any[]> {
    return of(this.TRADES);
  }

}
