import { Component, OnInit, Inject } from '@angular/core';
import { Book, LiteraryGenre } from '../../models/book.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { FormBuilder, Validators } from '@angular/forms';


export interface BookEditData {
  editMode: boolean;
  book?: Book;
}

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  private book: Book;
  public genres = Object.keys(LiteraryGenre);

  bookGroup = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    releaseDate: [''],
    category: ['', Validators.required],
    description: [''],
    visibility: ['', Validators.required],
  });


  constructor(
    public dialogRef: MatDialogRef<BookDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookEditData,
    public fb: FormBuilder,
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

  }

  onAdd(): void {

  }

}
