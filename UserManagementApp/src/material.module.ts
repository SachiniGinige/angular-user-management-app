import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
  ]
})
export class MaterialModule { }
