import { Component, Input, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent{
  @Input () arr:Array<ProductComponent> = new Array<ProductComponent>();
  output_name:string;
  output_price:number;

  displayProduct(j:number){
    this.output_name = this.arr[j].name;
    this.output_price = this.arr[j].price;
  }

  hideProduct(j:number){
    this.output_name="";
  }
}
