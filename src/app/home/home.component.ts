import { Component, OnInit } from '@angular/core';
import { BookService } from './../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books$;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books$ = this.bookService.getBooks();
  }
}
