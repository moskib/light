import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PopularbooksService {
  url =
    'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=';
  key = 'e2fad4b7e5f7467b8599bf929d4ba0dc';

  constructor(private http: HttpClient) {}

  getPupularIsbns() {
    return this.http.get(this.url + this.key).pipe(
      map((books: Response) =>
        books['results'].map(book => {
          const bookDetails = book['book_details'][0];
          return {
            isbn: bookDetails.primary_isbn13
          };
        })
      )
    );
  }
}
