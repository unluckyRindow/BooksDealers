import { Component, OnInit, ViewChild, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { Book, BookStatus, LiteraryGenre } from '../../models/book.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { MockedService } from 'src/app/mocked/mocked.service';
import { BooksService } from '../../services/books.service';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { map, toArray } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Observable } from 'rxjs';


@UntilDestroy()
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit, AfterViewInit {
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
    private mockedService: MockedService,
    private booksService: BooksService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loadBooks()
      .pipe(
        untilDestroyed(this),
        map(books => books.map(book => {
          if (book.owner) {
            book.owner = {
              id: book.owner.id,
              name: book.owner.name,
            };
          }
          return book;
        }))
      )
      .subscribe(x => {
        this.booksList = x;
        this.dataSource = new MatTableDataSource(this.booksList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = (data: Book, filter: string) => {
          return data.title.concat(data.author).trim().toLowerCase().includes(filter);
        };
    });
  }

  ngAfterViewInit(): void {
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
    const isOwner = this.authService.userId === bookSelected.owner.id;
    const dialogRef = this.dialog.open(BookDetailsComponent, {
      data: {
        book: bookSelected,
        isOwner,
      }
    });

    dialogRef.afterClosed()
      .subscribe(x => {
        if (x) {
          this.loadBooks();
        }
      });
  }

  loadUserBooks(): Observable<Book[]> {
    return this.booksService.getUserBooks();
  }

  loadAllBooks(): Observable<Book[]> {
    return this.booksService.getAllBooks()
      .pipe(map(books => books.filter(book => book.status === BookStatus.Public)));
  }

  loadBooks(): Observable<Book[]> {
    if (this.isUserBooksList) {
      return this.loadUserBooks();
    } else {
      return this.loadAllBooks();
    }
  }
}
