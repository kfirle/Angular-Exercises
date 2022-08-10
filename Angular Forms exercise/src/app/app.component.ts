import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj1';
  firstname:string;;
  lastname:string;
  address:string;
  phone:string;
  mail:string;

  frm1:FormGroup=new FormGroup({
    fname:new FormControl("", Validators.compose([Validators.required,Validators.minLength(2)])),
    lname:new FormControl("", Validators.compose([Validators.required,Validators.minLength(2)])),
    addr:new FormControl("", Validators.compose([Validators.required,Validators.minLength(2)])),
    phone:new FormControl("",Validators.compose([Validators.required,Validators.pattern("^[0-9]{10}$")])),
    mail:new FormControl("", Validators.compose([Validators.required, Validators.pattern("[a-zA-Z]+[a-zA-Z0-9]*@[a-zA-Z0-9]+.com")]))
  });

  a():boolean{
    return this.frm1.valid&& this.frm1.dirty;
  }
  b(){
    this.firstname=this.frm1.controls["fname"].value;
    this.lastname=this.frm1.controls["lname"].value;
    this.address=this.frm1.controls["addr"].value;
    this.phone=this.frm1.controls["phone"].value;
    this.mail=this.frm1.controls["mail"].value;
  }
}
