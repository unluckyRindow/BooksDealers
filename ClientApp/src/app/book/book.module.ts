import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './components/books-list/books-list.component';
import { UserBooksListComponent } from './components/user-books-list/user-books-list.component';



@NgModule({
  declarations: [BooksListComponent, UserBooksListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BooksListComponent,
    UserBooksListComponent
  ]
})
export class BookModule { }
