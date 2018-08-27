import { Book } from './../models/book';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BookDialogComponent } from '../book-dialog/book-dialog.component';

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
    const dialogRef = this.dialog.open(BookDialogComponent, {
      width: '500px',
      data: { ...this.book }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
