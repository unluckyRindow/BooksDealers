import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Book, BookStatus, LiteraryGenre } from '../../models/book.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { MockedService } from 'src/app/mocked/mocked.service';



@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {


  @Input()
  booksList: Book[];

  @Input()
  isUserBooksList = false;


  dataSource: MatTableDataSource<Book>;

  columnsConfig: string[] = ['title', 'author', 'category', 'releaseDate', 'creationDate'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public mockedService: MockedService,
  ) { }

  ngOnInit(): void {
    // mocked without backend, depending if global or user books fetch proper data
    if (this.isUserBooksList) {
      this.booksList = this.mockedService.userBooks;
    } else {
      this.booksList = this.mockedService.books;
    }
    this.dataSource = new MatTableDataSource(this.booksList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const keyword = (event.target as HTMLInputElement).value;
    this.dataSource.filter = keyword.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onBookSelected(bookSelected: Book): void {
    // check if selected book belongs to user to display trade/ edit delete
    const isOwner = true;

    this.dialog.open(BookDetailsComponent, {
      data: {
        book: bookSelected,
        isOwner,
      }
    });
  }
}
