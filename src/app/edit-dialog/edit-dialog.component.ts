import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatBottomSheet,
  MatDialogRef
} from '@angular/material';

import { BookCardComponent } from '../book-card/book-card.component';
import { Book } from '../models/book';
import { WarningSheetComponent } from './../warning-sheet/warning-sheet.component';

@Component({
  selector: 'edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  form: FormGroup;
  hasErrors = false;

  constructor(
    public dialogRef: MatDialogRef<BookCardComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Book,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: [this.data.title, Validators.required],
      authors: [this.data.authors, Validators.required],
      publishedDate: [this.data.publishedDate, [Validators.required]],
      description: [this.data.description, Validators.required]
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

  openWarningSheet() {
    console.log(this.form.value);
    this.bottomSheet
      .open(WarningSheetComponent)
      .afterDismissed()
      .subscribe(result => {
        console.log(result);
      });
  }
}
