import { Injectable } from '@angular/core';
import { first, max } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  constructor() { }

  generateUserName(firstname:string, lastname:string): string{
    let str:string="";
    let username="";
    if(!firstname && !lastname){
      throw Error();
    }
    if(firstname && lastname){
      str = firstname + lastname;
    }
    else{
      if(firstname){
        str = firstname;
      }
      else{
        str = lastname;
      }
    }
    for(let i=0;i<6;i++){
      let index = Math.round(Math.random() * (str.length-1));
      username += str[index];
    }
    return username;
  }
}
