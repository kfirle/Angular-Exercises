import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj1';
  private _output:string;

  get output(): string{
    return this._output;
  }

  boom3Handlerprint(str:string){
    this._output = "bimbambom";
    setTimeout(() => {
      this._output = "";
    }, 2000);
  }

  boom3Handlerlog(str:string){
    console.log(3);
  }
}
