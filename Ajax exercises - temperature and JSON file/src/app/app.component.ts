import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj1';
  obj:any;
  obj_temperature:any;

  constructor(private h:HttpClient){}

  getObj1(){
    this.h.get("./assets/x.json").subscribe(t=>this.obj=t);
  }
  
  getTemperatureObj(city:string){
    this.h.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d7065f5c2ec83481abbbdabfb3792687&units=metric`)
      .subscribe(t=>this.obj_temperature=t,()=>alert("No such place"));
  }
}
