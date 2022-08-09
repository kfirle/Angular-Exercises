import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent{
  private _result:number;
  private _is_active:boolean = false;
  private _counter:number = 0;
  @Output() boom3:EventEmitter<string> = new EventEmitter<string>();

  get result() : number {
    return this._result;
  }

  get is_active() : boolean {
    return this._is_active;
  }

  get counter() : number {
    return this._counter;
  }

  multiply(num1:number,num2:number){
    this._result = num1 * num2;
    this._is_active = true;
    this.raise();
  }

  divide(num1:number,num2:number){
    if(num2 == 0){
      alert("Cannot divide in zero!");
    }
    else{
      this._result = num1 / num2;
      this._is_active = true;
      this.raise();
    }
  }

  raise(){
    this._counter++;
    if(this.counter %3 ==0){
      this.boom3.emit();
    }
  }
}
