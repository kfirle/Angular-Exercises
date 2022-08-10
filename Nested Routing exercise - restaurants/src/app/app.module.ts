import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DairyComponent } from './dairy/dairy.component';
import { MeatComponent } from './meat/meat.component';
import { CheeseFactoryComponent } from './cheese-factory/cheese-factory.component';
import { PizzaHouseComponent } from './pizza-house/pizza-house.component';
import { OnlyBeafComponent } from './only-beaf/only-beaf.component';
import { LosPollosHermanosComponent } from './los-pollos-hermanos/los-pollos-hermanos.component';

@NgModule({
  declarations: [
    AppComponent,
    DairyComponent,
    MeatComponent,
    CheeseFactoryComponent,
    PizzaHouseComponent,
    OnlyBeafComponent,
    LosPollosHermanosComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {
        path: "Dairy", component: DairyComponent, children: [
          { path: "CheeseFactory", component: CheeseFactoryComponent},
          { path: "PizzaHouse", component: PizzaHouseComponent }
        ]
      },
      {
        path: "Meat", component: MeatComponent, children: [
          { path: "LosPollos", component: LosPollosHermanosComponent },
          { path: "OnlyBeaf", component: OnlyBeafComponent }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
