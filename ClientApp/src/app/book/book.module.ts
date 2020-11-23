import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './components/books-list/books-list.component';
import { UserBooksListComponent } from './components/user-books-list/user-books-list.component';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { MockedService } from '../mocked/mocked.service';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [BooksListComponent, UserBooksListComponent, BookDetailsComponent, BookEditComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BooksListComponent,
    UserBooksListComponent
  ],
  providers: [
    MockedService
  ]
})
export class BookModule { }
