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
    Pending = 'PENDING',
    Accepted = 'ACCEPTED',
    CounterofferReceived = 'CONTEROFFER_RECEIVED',
    CounterofferSent = 'COUNTEROFFER_SENT',
    Rejected = 'REJECTED',
    Closed = 'CLOSED',
}
