export interface Book {
    id: string;
    owner: string;
    status: BookStatus;
    title: string;
    author: string;
    category: LiteraryGenre;
    releaseDate: string;
    creationDate: string;
    description?: string;
}

// TODO add all books categories
export enum LiteraryGenre {
    Adventure = 'ADVENTURE',
    Fiction = 'FICTION'
}

export enum BookStatus {
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export interface BookCreateData {
    owner: string;
    status: BookStatus;
    title: string;
    author: string;
    category: LiteraryGenre;
    releaseDate: string;
    description?: string;
}
