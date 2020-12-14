export interface Book {
    id: number;
    owner: OwnerData;
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
    ownerId: number;
    status: BookStatus;
    title: string;
    author: string;
    category: LiteraryGenre;
    releaseDate: string;
    description?: string;
}

export interface OwnerData {
    id: number;
    name: string;
}
