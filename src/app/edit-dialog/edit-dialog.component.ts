import { WarningSheetComponent } from './../warning-sheet/warning-sheet.component';
import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatBottomSheet
} from '@angular/material';

import { BookCardComponent } from '../book-card/book-card.component';
import { Book } from '../models/book';

@Component({
  selector: 'edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<BookCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book,
    private bottomSheet: MatBottomSheet
  ) {}

  openWarningSheet(f) {
    this.bottomSheet
      .open(WarningSheetComponent)
      .afterDismissed()
      .subscribe(result => {
        console.log(f);
      });
  }
}
