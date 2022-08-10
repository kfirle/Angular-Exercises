import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      { path: 'comp1', component: Comp1Component},
      { path: 'comp2', component: Comp2Component,canActivate:[AuthGuard]},
      { path: 'comp3', component: Comp3Component,canActivate:[AuthGuard]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
