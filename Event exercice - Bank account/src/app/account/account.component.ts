import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Balance } from '../Balance';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  private _balance = 0;
  get balance() : number{
    return this._balance;
  }
  withdraw(num:number){
    if(num < 0){
      alert("The input can not be negative!");
    }
    else{
      if(num > this._balance){
      let balance1:Balance = new Balance(this._balance, this._balance-num);
      this.Overdraft.emit(balance1);
      }
      else{
        this._balance -= num;
      }
    }
  }
  deposit(num:number){
    if(num < 0){
      alert("The input can not be negative!");
    }
    else{
      this._balance += num;
    }
  }

  @Output() Overdraft:EventEmitter<Balance> = new EventEmitter<Balance>();

  constructor() { }

  ngOnInit(): void {
  }

}
