import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[OnlyHebrew]'
})
export class OnlyHebrewDirective {

  constructor() { }
  @Output() not_heb:EventEmitter<string> =new EventEmitter<string>();

  @HostBinding("class")className:string="";
  
  @HostListener("keypress",["$event"])fun1(e:KeyboardEvent){
    console.log(e.key);
    this.className="";
    if(e.key<'א' || e.key>'ת'){
      this.className="not_hebrew";
      e.preventDefault();
      this.not_heb.emit("Only Hebrew!");
    }
  }

}
