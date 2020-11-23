import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookEditComponent } from '../book-edit/book-edit.component';

@Component({
  selector: 'app-user-books-list',
  templateUrl: './user-books-list.component.html',
  styleUrls: ['./user-books-list.component.scss']
})
export class UserBooksListComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  // add new book
  onAdd(): void {
    this.dialog.open(BookEditComponent, {data: {
      editMode: false
    }});
  }

}
