import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Book } from '../../models/book.model';
import * as _ from 'lodash';
import { BooksService } from '../../services/books.service';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  readonly COVERS_API_PREFIX = 'http://covers.openlibrary.org/b/isbn/';
  readonly COVERS_API_SUFFIX = '-L.jpg';

  @Input() book: Book;
  @Input() allowToChooseBook: boolean;
  @Input() booksSourceId: number;
  @Output() bookChanged = new EventEmitter<Book>();

  bookOptions: Book[];

  bookOptionLabels: {value: number, label: string}[] = [];

  constructor(
    private booksService: BooksService,
  ) { }

  ngOnInit(): void {
    if (this.booksSourceId) {
      this.booksService.getUserBooks(this.booksSourceId)
      .subscribe(x => {
        this.bookOptions = x;
        this.bookOptions.forEach(book => this.bookOptionLabels.push({value: book.id, label: book.title}));
      });
    }
   }

   onBookChange(ev: any): void {
      this.book = this.bookOptions.find(x => x.id === ev);
      this.bookChanged.emit(this.book);
   }

   getCoverUrl(): string {
    return this.book.isbn ? this.COVERS_API_PREFIX + this.book.isbn + this.COVERS_API_SUFFIX : 'assets/no_img.png';
  }
}
