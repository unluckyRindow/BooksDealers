import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './components/books-list/books-list.component';
import { UserBooksListComponent } from './components/user-books-list/user-books-list.component';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [BooksListComponent, UserBooksListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule
  ],
  exports: [
    BooksListComponent,
    UserBooksListComponent
  ]
})
export class BookModule { }
