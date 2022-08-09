import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj1';
  prodList:ProductComponent[]=[];

 constructor(){
   let p1=new ProductComponent();
   p1.name="tomato";
   p1.price = 10;
   this.prodList.push(p1);

   let p2=new ProductComponent();
   p2.name="banana";
   p2.price = 15;
   this.prodList.push(p2);

   let p3=new ProductComponent();
   p3.name="watermelon";
   p3.price = 20;
   this.prodList.push(p3);
 }
}
