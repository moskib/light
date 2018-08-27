import { EditDialogComponent } from './../edit-dialog/edit-dialog.component';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { BookDialogComponent } from '../book-dialog/book-dialog.component';
import { Book } from './../models/book';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  @Input('book')
  book: Book;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(BookDialogComponent, {
      width: '500px',
      data: { ...this.book }
    });
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '500px',
      data: { ...this.book }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
