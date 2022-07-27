import { DatePipe } from "@angular/common";

export class Report{
  private _vehicle_num:number;
  private _address:string;
  private _date:Date;
  private _inspector_name:string;

  get vehicle_num() : number{
    return this._vehicle_num;
  }

  set vehicle_num(num:number){
    this._vehicle_num = num;
  }

  get address() : string{
    return this._address;
  }

  set address(str:string){
    this._address = str;
  }

  get date() : Date{
    return this._date;
  }

  set date(d1:Date){
    this._date = d1;
  }

  get inspector_name() : string{
    return this._inspector_name;
  }

  set inspector_name(str:string){
    this._inspector_name = str;
  }

  constructor(vehicle_num:number,address:string,date:Date, inspector_name:string){
    this.vehicle_num = vehicle_num;
    this.address = address;
    this.date = date;
    this.inspector_name = inspector_name;
  }
}
