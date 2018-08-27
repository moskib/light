import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppConfig } from './../config';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url =
    'https://books.google.com/ebooks?id=buc0AAAAMAAJ&dq=holmes&as_brr=4&source=webstore_bookcard';
  private key = AppConfig.GOOGLE_BOOKS_KEY;
  private volumeUrl = 'httpx://www.googleapis.com/books/v1/volumes/';

  private queryUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<{}> {
    return this.http
      .get(this.queryUrl + 'author:james+patterson&' + this.key)
      .pipe(
        map((books: Response) =>
          books['items'].map(book => ({
            id: book['id'],
            authors: book['volumeInfo']['authors'],
            publishedDate: book['volumeInfo']['publishedDate'],
            title: book['volumeInfo']['title'],
            imageUrl: book['volumeInfo']['imageLinks']
              ? book['volumeInfo']['imageLinks']['thumbnail']
              : 'https://dummyimage.com/128X195/000/0011ff&text=no+image'
          }))
        )
      );
  }
}
