import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookEditComponent } from '../book-edit/book-edit.component';
import { BooksListComponent } from '../books-list/books-list.component';

@Component({
  selector: 'app-user-books-list',
  templateUrl: './user-books-list.component.html',
  styleUrls: ['./user-books-list.component.scss']
})
export class UserBooksListComponent implements OnInit {

  @ViewChild(BooksListComponent) booksListComponent: BooksListComponent;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  // add new book
  onAdd(): void {
    const dialogRef = this.dialog.open(BookEditComponent, {data: {
      editMode: false
    }});

    dialogRef.afterClosed()
      .subscribe(x => {
        this.booksListComponent.loadBooks();
      });
  }

}
