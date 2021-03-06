export interface Book {
    id: number;
    owner: UserData;
    status: BookStatus;
    title: string;
    author: string;
    category: LiteraryGenre;
    releaseDate: string | Date;
    creationDate: string | Date;
    description?: string;
    isbn?: string;
}

export enum LiteraryGenre {
    Adventure = 'ADVENTURE',
    Fiction = 'FICTION',
    Romance = 'ROMANCE',
    Thriller = 'THRILLER',
    Biography = 'BIOGRAPHY',
    Psychological = 'PSYCHOLOGICAL',
    Drama = 'DRAMA',
    Comedy = 'COMEDY',
    Action = 'ACTION',
    Novel = 'NOVEL'
}

export enum BookStatus {
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export interface BookCreateData {
    owner: UserData;
    status: BookStatus;
    title: string;
    author: string;
    category: LiteraryGenre;
    releaseDate: string | Date;
    description?: string;
    isbn ?: string;
}

export interface BookUpdateData extends BookCreateData {
    id: number;
    creationDate: string | Date;
}

export interface UserData {
    id: number;
    name: string;
    email?: string;
}
