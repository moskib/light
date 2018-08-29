import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatGridListModule,
  MatTooltipModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { DialogsModule } from './dialogs/dialogs.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookService } from './services/book.service';
import { TitlePipe } from './title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BookCardComponent,
    TitlePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    DialogsModule,
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
