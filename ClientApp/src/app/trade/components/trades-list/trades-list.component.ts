import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Trade } from '../../models/trade.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TradesService } from '../../services/trades.service';
import { MockedService } from 'src/app/mocked/mocked.service';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-trades-list',
  templateUrl: './trades-list.component.html',
  styleUrls: ['./trades-list.component.scss']
})
export class TradesListComponent implements OnInit, OnDestroy, AfterViewInit {

  tradesList: Trade[];

  dataSource: MatTableDataSource<Trade>;
  columnsConfig: string[] = ['target.title', 'target.author', 'target.category', 'initiator.name', 'lastUpdated', 'creationDate'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private tradesService: TradesService,
    private mockedService: MockedService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadTrades();
  }

  ngAfterViewInit(): void {
    this.dataSource.sortingDataAccessor = _.get;
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data: Trade, filter: string) => {
      return data.target.title.concat(data.target.author).trim().toLowerCase().includes(filter);
    };
  }

  ngOnDestroy(): void {}

  onTradeSelected(trade: Trade): void {
    this.router.navigate([`/trades`, trade.id], {state: {data: {trade}}});
  }

  applyFilter(event: Event): void {
    const keyword = (event.target as HTMLInputElement).value;
    this.dataSource.filter = keyword.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadTrades(): void {
    this.mockedService.getAllTrades()
      .pipe(untilDestroyed(this))
      .subscribe(x => {
        this.tradesList = x;
        this.dataSource = new MatTableDataSource(this.tradesList);
        this.dataSource.paginator = this.paginator;
      });
  }
}
