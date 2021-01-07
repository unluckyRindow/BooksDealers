import { UserData } from '../../book/models/book.model';


export interface Comment {
    id: number;
    author: UserData;
    text: string;
    creationDate: string | Date;
    tradeId: number;
}
