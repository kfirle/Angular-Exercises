import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MuniComponent } from './muni/muni.component';
import { InspectorComponent } from './inspector/inspector.component';

@NgModule({
  declarations: [
    AppComponent,
    MuniComponent,
    InspectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
