import { WarningSheetComponent } from './warning-sheet/warning-sheet.component';
import { NewBookDialogComponent } from './new-book-dialog/new-book-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatNativeDateModule,
  MatDatepickerModule
} from '@angular/material';

import { BookDialogComponent } from './book-dialog/book-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatBottomSheetModule,
    MatNativeDateModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    BookDialogComponent,
    DeleteDialogComponent,
    EditDialogComponent,
    NewBookDialogComponent,
    WarningSheetComponent
  ],
  declarations: [
    BookDialogComponent,
    DeleteDialogComponent,
    EditDialogComponent,
    NewBookDialogComponent,
    WarningSheetComponent
  ]
})
export class DialogsModule {}
