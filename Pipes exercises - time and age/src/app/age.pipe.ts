import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string): number {
    let today = new Date();
    let date_arr = value.split('-');
    console.log(date_arr);
    if(today.getFullYear() <= +date_arr[0]){
      return 0;
    }
    if(today.getMonth()+1 < +date_arr[1]){
      return today.getFullYear() - +date_arr[0] - 1;
    }
    if(today.getMonth()+1 == +date_arr[1] && today.getDate() < +date_arr[2]){
      return today.getFullYear() - +date_arr[0] - 1;
    }
    return today.getFullYear() - +date_arr[0];
  }

}
