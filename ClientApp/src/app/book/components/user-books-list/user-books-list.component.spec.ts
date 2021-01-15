import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBooksListComponent } from './user-books-list.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder } from '@angular/forms';

describe('UserBooksListComponent', () => {
  let component: UserBooksListComponent;
  let fixture: ComponentFixture<UserBooksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBooksListComponent ],
      imports: [MatDialogModule, HttpClientTestingModule, TranslateModule.forRoot()],
      providers: [
        FormBuilder,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
