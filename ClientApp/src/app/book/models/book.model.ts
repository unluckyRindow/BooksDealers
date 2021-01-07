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
    ownerId: number;
    status: BookStatus;
    title: string;
    author: string;
    category: LiteraryGenre;
    releaseDate: string | Date;
    description?: string;
}

export interface UserData {
    id: number;
    name: string;
}
