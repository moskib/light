import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url =
    'https://books.google.com/ebooks?id=buc0AAAAMAAJ&dq=holmes&as_brr=4&source=webstore_bookcard';
  key = 'AIzaSyADwQkVMrQRRkju9MTD8EQnJpOA7yBO8hs';

  queryUrl = 'https://www.googleapis.com/books/v1/volumes?q=harry+potter';
  constructor(private http: HttpClient) {}

  getbook() {
    return this.http.get(this.url).pipe(
      map((book: Response) => ({
        id: book['id'],
        authors: book['volumeInfo']['authors'],
        publishedDate: book['volumeInfo']['publishedDate'],
        title: book['volumeInfo']['title'],
        desription: book['volumeInfo']['description'],
        imageUrl: book['volumeInfo']['imageLinks']['medium']
      }))
    );
  }

  getBooks() {
    return this.http.get(this.queryUrl).pipe(
      map((books: Response) =>
        books['items'].map(book => ({
          id: book['id'],
          authors: book['volumeInfo']['authors'],
          publishedDate: book['volumeInfo']['publishedDate'],
          title: book['volumeInfo']['title'],
          imageUrl: book['volumeInfo']['imageLinks']
            ? book['volumeInfo']['imageLinks']['thumbnail']
            : 'https://dummyimage.com/128X195/8a8a8a/dadade&text=no+image'
        }))
      )
    );
  }
}
