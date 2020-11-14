import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradesListComponent } from './components/trades-list/trades-list.component';



@NgModule({
  declarations: [TradesListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TradesListComponent
  ]
})
export class TradeModule { }
