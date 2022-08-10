import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj1';
  msg:string="";

  showErrorMsg(str:string){
    this.msg = str;
    console.log("fuck");
    setTimeout(() => {
      this.msg = "";
    }, 1000);
  }
}
