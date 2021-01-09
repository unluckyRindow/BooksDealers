import { Component, OnInit, Input, Inject } from '@angular/core';
import { Book } from '../../models/book.model';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { BookEditComponent, BookEditData } from '../book-edit/book-edit.component';
import { BooksService } from '../../services/books.service';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { Router } from '@angular/router';

export interface BookDetailsData{
  book: Book;
  isOwner: boolean;
}

@UntilDestroy()
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  @Input()
  book: Book;

  constructor(
    public dialogRef: MatDialogRef<BookDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BookDetailsData,
    public dialog: MatDialog,
    private booksService: BooksService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.book = this.data.book;
  }

  onClose(): void {
    this.dialogRef.close(true);
  }

  // init edit
  onEdit(): void{
      this.dialog.open(BookEditComponent, {data: {
      editMode: true,
      book: this.book
    } as BookEditData}
    );
  }

  // delete item
  onDelete(): void {
    this.booksService.deleteBook(this.book.id)
      .pipe(untilDestroyed(this))
      .subscribe(x => {
        this.dialogRef.close(true);
      });
  }

  // init trade here or close and ask list for same
  onTrade(): void {
    this.router.navigate(['/trades/new'], {state: {data: {targetBook: this.book, creationMode: true}}});
    this.dialog.closeAll();
  }

}
