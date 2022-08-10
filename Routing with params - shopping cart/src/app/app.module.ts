import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { ItemComponent } from './item/item.component';
import { Item2Component } from './item2/item2.component';

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent,
    ItemComponent,
    Item2Component
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {path:"Basket/:item_name",component:BasketComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
