import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToMinHoursPipe } from './to-min-hours.pipe';
import { AgePipe } from './age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToMinHoursPipe,
    AgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
