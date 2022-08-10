import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css']
})
export class Item2Component{

  constructor(private r:Router){}

  addItem(item_name:string){
    this.r.navigate(['Basket',item_name]);
  }

}
