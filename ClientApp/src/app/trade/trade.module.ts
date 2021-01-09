import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradesListComponent } from './components/trades-list/trades-list.component';
import { TradeDetailsComponent } from './components/trade-details/trade-details.component';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookModule } from '../book/book.module';



@NgModule({
  declarations: [TradesListComponent, TradeDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    BookModule,
  ],
  exports: [
    TradesListComponent
  ]
})
export class TradeModule { }
