import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'proj1';
  crypto_list:any;
  selected:any;

  constructor(private h:HttpClient){}

  ngOnInit(): void {
    this.h.get("https://api.coingecko.com/api/v3/coins/list").subscribe(t=>this.crypto_list=t);
  }

  getDetails(name:string){
    this.h.get(`https://api.coingecko.com/api/v3/coins/${name}`).subscribe(t=>this.selected=t);
  }

}
