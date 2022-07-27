import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PictureComponent } from './picture/picture.component';
import { PictureListComponent } from './picture-list/picture-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    PictureListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
