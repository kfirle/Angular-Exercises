import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  constructor(private r:Router){}

  addItem(item_name:string){
    this.r.navigate(['Basket',item_name]);
  }

}
