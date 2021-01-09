import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book.model';
import * as _ from 'lodash';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book: Book;
  @Input() allowToChooseBook: boolean;
  @Output() bookChanged = new EventEmitter<Book>();

  bookOptions: Book[];

  bookOptionLabels: {value: number, label: string}[] = [];

  constructor(
    private booksService: BooksService,
  ) { }

  ngOnInit(): void {
    this.booksService.getUserBooks()
      .subscribe(x => {
        this.bookOptions = x;
        this.bookOptions.forEach(book => this.bookOptionLabels.push({value: book.id, label: book.title}));
      });
   }

   onBookChange(ev: any): void {
      this.book = this.bookOptions.find(x => x.id === ev);
      this.bookChanged.emit(this.book);
   }
}
