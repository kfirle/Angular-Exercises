import { Component } from '@angular/core';
import { UsernameService } from './username.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj1';
  username="";

  constructor(private u:UsernameService){}

  createUserName(firstname:string, lastname:string){
    try{
      this.username = this.u.generateUserName(firstname,lastname);
    }
    catch(e){
      alert("Invalid Input");
    }
  }
}
