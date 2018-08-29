import { Component, OnInit } from '@angular/core';
import { BookCardComponent } from '../../core/book-card/book-card.component';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {
  constructor(public dialogRef: MatDialogRef<BookCardComponent>) {}

  yes() {
    this.dialogRef.close(true);
  }

  no() {
    this.dialogRef.close(false);
  }
}
