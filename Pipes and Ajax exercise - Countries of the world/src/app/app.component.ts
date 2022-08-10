import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj1';
  countries:any = [];
  search_criteria:string="";

  constructor(private h:HttpClient){
    this.h.get("https://restcountries.com/v3.1/all").subscribe(t=>this.countries=t);
  }
  
  update_criteria(str:string){
    this.search_criteria = str;
  }
}
