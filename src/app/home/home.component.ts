import { NewBookDialogComponent } from './../new-book-dialog/new-book-dialog.component';
import { Component, OnInit } from '@angular/core';

import { BookService } from './../services/book.service';
import { MatDialog } from '@angular/material';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ backgroundColor: 'white', opacity: 0 }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ backgroundColor: 'white', opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  books$;
  showButton = true;

  constructor(private bookService: BookService, private dialog: MatDialog) {}

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }

  addNewBook() {
    this.showButton = false;
    const dialogRef = this.dialog.open(NewBookDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.showButton = true;
      if (result) {
        console.log(result);
      }
    });
  }
}
