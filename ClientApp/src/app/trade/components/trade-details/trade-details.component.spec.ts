import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeDetailsComponent } from './trade-details.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('TradeDetailsComponent', () => {
  let component: TradeDetailsComponent;
  let fixture: ComponentFixture<TradeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeDetailsComponent ],
      imports: [MatDialogModule, HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
