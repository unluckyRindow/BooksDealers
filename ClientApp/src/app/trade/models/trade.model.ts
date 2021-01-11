import { UserData, Book } from '../../book/models/book.model';
import { Comment } from './comment.model';


export interface Trade {
    id: number;
    status: TradeStatus;
    lastUpdated: string | Date;
    creationDate: string | Date;
    initiator: UserData;
    initiatorOffer: Book;
    targetOwner: UserData;
    target: Book;
    comments: Comment[];
}

export enum TradeStatus {
    New = 'NEW',
    Accepted = 'ACCEPTED',
    Counteroffer = 'CONTEROFFER',
    Rejected = 'REJECTED',
    Closed = 'CLOSED',
}

export interface TradeAddModel {
    status: TradeStatus;
    initiator: number;
    initiatorOffer: number;
    targetOwner: number;
    target: number;
    comments: Comment[];
}
