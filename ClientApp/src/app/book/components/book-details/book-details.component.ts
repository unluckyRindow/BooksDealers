import { Component, OnInit, Input, Inject } from '@angular/core';
import { Book } from '../../models/book.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface BookDetailsData{
  book: Book;
  isOwner: boolean;
}

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
    @Inject(MAT_DIALOG_DATA) public data: BookDetailsData
  ) { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.dialogRef.close();
  }

  // init edit
  onEdit(): void{

  }

  // delete item
  onDelete(): void {

  }

  // init trade here or close and ask list for same
  onTrade(): void {

  }

}
