import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  private _name:string;
  private _price:number;

  get name(): string{
    return this._name;
  }
  set name(name:string){
    this._name = name;
  }

  get price(): number{
    return this._price;
  }
  set price(price:number){
    this._price = price;
  }
}
