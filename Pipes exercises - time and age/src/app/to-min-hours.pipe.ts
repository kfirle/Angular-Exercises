import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMinHours'
})
export class ToMinHoursPipe implements PipeTransform {

  transform(value: number): unknown {
    if(value >= 0){
      let minutes:Number = value % 60;
      let hours:number = Math.floor(value/60);
      return {Hours:hours, Minutes:minutes};
    }
    return {Error:"Time must be a Positive number"}
  }

}
