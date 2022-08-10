import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  referer:string="";
  user:string;

  constructor() { }

  checkPerm(){
    if(this.referer == 'comp1'){
      return true;
    }
    if(this.user == 'admin'){
      return true;
    }
    if(this.user == 'emp' && this.referer == 'comp2'){
      return true;
    }
    return false;
  }
}
