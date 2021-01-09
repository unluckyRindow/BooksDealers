import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';





const MaterialComponents = [
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatDividerModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatRadioModule,
  MatSortModule,
  MatCardModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents,
    BrowserAnimationsModule
  ],
  exports: [
    MaterialComponents,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
