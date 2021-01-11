import { Component, OnInit, Inject } from '@angular/core';
import { Book, LiteraryGenre, BookCreateData, BookUpdateData } from '../../models/book.model';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { FormBuilder, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BooksService } from '../../services/books.service';
import { AuthService } from 'src/app/auth/services/auth.service';


export interface BookEditData {
  editMode: boolean;
  book?: Book;
}

@UntilDestroy()
@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  private book: Book;
  public genres = Object.keys(LiteraryGenre);

  bookGroup = this.fb.group({
    title: [this.data.editMode ? this.data.book.title : '', Validators.required],
    author: [this.data.editMode ? this.data.book.author : '', Validators.required],
    releaseDate: [this.data.editMode ? (this.data.book.releaseDate as Date).getFullYear() : '', Validators.pattern('^(([1-9])|([1-9][0-9])|([1-9][0-9]{2})|(1[0-9]{3})|(20[0-2][0-9]))$')],
    category: [this.data.editMode ? this.data.book.category : '', Validators.required],
    description: [this.data.editMode ? this.data.book.description : ''],
    isbn: [this.data.editMode ? this.data.book.isbn : ''],
    visibility: [this.data.editMode ? this.data.book.status : '', Validators.required],
  });


  constructor(
    public dialogRef: MatDialogRef<BookDetailsComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: BookEditData,
    public fb: FormBuilder,
    private booksService: BooksService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    if (this.data.editMode) {
      this.book = this.data.book;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    const updated: BookUpdateData = {
      id: this.data.book.id,
      owner: {id: this.authService.userId, name: this.authService.userName},
      status: this.bookGroup.value.visibility,
      title: this.bookGroup.value.title,
      category: this.bookGroup.value.category,
      author: this.bookGroup.value.author,
      creationDate: this.data.book.creationDate.toLocaleString(),
      releaseDate: this.bookGroup.value.releaseDate,
      description: this.bookGroup.value.description,
      isbn: this.bookGroup.value.isbn,
    };
    this.booksService.updateBook(updated)
      .pipe(untilDestroyed(this))
      .subscribe(x => {
        this.dialogRef.close(true);
        this.dialog.closeAll();
      });
  }

  onAdd(): void {
    const created: BookCreateData = {
      owner: {id: this.authService.userId, name: this.authService.userName},
      status: this.bookGroup.value.visibility,
      title: this.bookGroup.value.title,
      category: this.bookGroup.value.category,
      author: this.bookGroup.value.author,
      releaseDate: this.bookGroup.value.releaseDate,
      description: this.bookGroup.value.description,
      isbn: this.bookGroup.value.isbn,
    } as BookCreateData;
    this.booksService.addBook(created)
      .pipe(untilDestroyed(this))
      .subscribe(x => {
        this.dialogRef.close(true);
      });
  }

}
