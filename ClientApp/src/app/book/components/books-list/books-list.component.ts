import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Book, BookStatus, LiteraryGenre } from '../../models/book.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookDetailsComponent } from '../book-details/book-details.component';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  // tslint:disable
  readonly MOCKED_BOOKS_LIST: Book[] = [
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
    {id: '1', owner: 'John Doe Owner', status: BookStatus.Public, title: 'SomeTitle', author: 'John Doe Author', category: LiteraryGenre.Fiction, releaseDate: '11-11-2011', creationDate: '12-11-2020', description: 'Books description goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'},
  ];


  dataSource = new MatTableDataSource(this.MOCKED_BOOKS_LIST);
  columnsConfig: string[] = ['title', 'author', 'category', 'releaseDate', 'creationDate'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const keyword = (event.target as HTMLInputElement).value;
    this.dataSource.filter = keyword.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onBookSelected(bookSelected: Book): void {
    // check if selected book belongs to user to display trade/ edit delete
    let isOwner = false;

    this.dialog.open(BookDetailsComponent, {
      data: {
        book: bookSelected,
        isOwner,
      }
    })
  }
}
