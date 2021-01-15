import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsBoxComponent } from './comments-box.component';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MatPaginator } from '@angular/material/paginator';

describe('CommentsBoxComponent', () => {
  let component: CommentsBoxComponent;
  let fixture: ComponentFixture<CommentsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsBoxComponent ],
      providers: [FormBuilder],
      imports: [HttpClientTestingModule, TranslateModule.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
