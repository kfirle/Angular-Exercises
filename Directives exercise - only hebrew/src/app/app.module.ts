import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnlyHebrewDirective } from './only-hebrew.directive';

@NgModule({
  declarations: [
    AppComponent,
    OnlyHebrewDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
