import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookDialogComponent } from './book-dialog/book-dialog.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookService } from './services/book.service';
import { WarningSheetComponent } from './warning-sheet/warning-sheet.component';
import { NewBookDialogComponent } from './new-book-dialog/new-book-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BookCardComponent,
    BookDialogComponent,
    EditDialogComponent,
    WarningSheetComponent,
    NewBookDialogComponent,
    DeleteDialogComponent
  ],
  entryComponents: [
    BookDialogComponent,
    EditDialogComponent,
    WarningSheetComponent,
    NewBookDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatBottomSheetModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule {}
