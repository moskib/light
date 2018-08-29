import { DeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './../edit-dialog/edit-dialog.component';
import {
  Component,
  Input,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { MatDialog } from '@angular/material';

import { BookDialogComponent } from '../book-dialog/book-dialog.component';
import { Book } from './../models/book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnDestroy {
  @Output('delete')
  delete = new EventEmitter();
  @Input('book')
  book: Book;
  subscription: Subscription;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(BookDialogComponent, {
      width: '500px',
      data: { ...this.book }
    });
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '500px',
      data: { ...this.book }
    });

    this.subscription = dialogRef.afterClosed().subscribe(result => {
      if (result) this.book = result;
    });
  }

  onDeleteClicked() {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete.emit(this.book.id);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
