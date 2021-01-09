import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Book, BookCreateData, BookStatus } from '../models/book.model';
import { Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private authService: AuthService,
    private http: HttpClient,
  ) { }


  getUserBooks(): Observable<any> {
    return this.http.get(this.authService.API_URL + 'api/books/user-books/' + this.authService.userId, this.authService.GetHeaders())
      .pipe(
        map((books: any) => books.map(book => {
          book.releaseDate = new Date(book.releaseDate);
          book.creationDate = new Date(book.creationDate);
          if (book.owner) {
            book.owner = {
              id: book.owner.id,
              name: book.owner.name,
            };
          }
          return book;
        }))
      );
  }

  getAllBooks(): Observable<any> {
    return this.http.get(this.authService.API_URL + 'api/books', this.authService.GetHeaders())
    .pipe(
      map((books: any) => books.map(book => {
        book.releaseDate = new Date(book.releaseDate);
        book.creationDate = new Date(book.creationDate);
        if (book.owner) {
          book.owner = {
            id: book.owner.id,
            name: book.owner.name,
          };
        }
        return book;
      })),
      map(books => books.filter(book => book.status === BookStatus.Public))
    );
  }

  addBook(book: BookCreateData): Observable<any> {
    return this.http.post(this.authService.API_URL + 'api/books', JSON.stringify(book), this.authService.GetHeaders());
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.authService.API_URL + 'api/books/' + id, this.authService.GetHeaders());
  }

  updateBook(book: Book): Observable<any> {
    return this.http.put(this.authService.API_URL + 'api/books/' + book.id, JSON.stringify(book), this.authService.GetHeaders());
  }
}
