import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { HomeComponent } from '../home/home.component';
import { Book } from '../models/book';

@Component({
  selector: 'app-new-book-dialog',
  templateUrl: './new-book-dialog.component.html',
  styleUrls: ['./new-book-dialog.component.css']
})
export class NewBookDialogComponent implements OnInit {
  form: FormGroup;
  newBook;
  // reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  constructor(
    public dialogRef: MatDialogRef<HomeComponent>,
    private fb: FormBuilder,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      authors: ['', Validators.required],
      publishedDate: ['', [Validators.required]],
      description: ['', Validators.required],
      imageUrl: ['', [Validators.required]]
    });
  }

  get title() {
    return this.form.get('title');
  }

  get authors() {
    return this.form.get('authors');
  }

  get publishedDate() {
    return this.form.get('publishedDate');
  }

  get description() {
    return this.form.get('description');
  }

  get imageUrl() {
    return this.form.get('imageUrl');
  }

  createNewBook() {
    this.newBook = <Book>{
      title: this.title.value,
      authors: this.authors.value,
      publishedDate: this.publishedDate.value,
      description: this.description.value,
      imageUrl: this.imageUrl.value
    };

    this.dialogRef.close(this.newBook);
  }

  close() {
    this.dialogRef.close(false);
  }
}
