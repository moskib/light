import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  book$;
  books$;
  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.book$ = this.bookService.getbook();
    this.books$ = this.bookService.getBooks();
  }
}
