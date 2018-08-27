import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { BookDialogComponent } from '../book-dialog/book-dialog.component';
import { BookService } from './../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books$;
  bookIsbns;
  books = [];

  constructor(private bookService: BookService, public dialog: MatDialog) {}

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }

  openDialog(book) {
    const dialogRef = this.dialog.open(BookDialogComponent, {
      width: '500px',
      data: { ...book }
    });

    // specify what you want to do after the dialog closes:
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
