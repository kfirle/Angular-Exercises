import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  items:Array<string> = [];

  constructor(private ar:ActivatedRoute, private r:Router) {
  }

  clearBasket(){
    this.items=[];
    this.r.navigate(['']);
  }

  ngOnInit(): void {
    this.ar.params.subscribe( (p:Params)=> this.items.push(p['item_name']));
  }

}
