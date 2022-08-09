import { Component } from '@angular/core';
import { Balance } from './Balance';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj1';
  overdraftHandler(balance1:Balance){
    let str = "Overdraft!\n" + "original balance: " + balance1.original_balance + "\n";
    str += "overdrafted balance: " + balance1.overdrafted_balance;
    alert(str);
  }
}
