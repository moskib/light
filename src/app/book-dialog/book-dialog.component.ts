import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { HomeComponent } from '../home/home.component';
import { Book } from '../models/book';

@Component({
  selector: 'book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.css']
})
export class BookDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
