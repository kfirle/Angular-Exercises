import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(value: Array<any>, criteria:string): Array<any> {
    let new_arr = [];
    for(let i=0; i<value.length;i++){
      if(value[i].name.common ==null && value[i].capital ==null){
        continue;
      }
      if(value[i].name.common !=null && value[i].capital !=null){
        if(value[i].name.common.toLowerCase().indexOf(criteria.toLowerCase())!= -1 || value[i].capital[0].toLowerCase().indexOf(criteria.toLowerCase())!= -1){
          new_arr.push(value[i]);
        }
      }
      else{
        if(value[i].name.common !=null){
          if(value[i].name.common.toLowerCase().indexOf(criteria.toLowerCase())!= -1){
            new_arr.push(value[i]);
          }
        }
        else{
          if(value[i].capital[0].toLowerCase().indexOf(criteria.toLowerCase())!= -1){
            new_arr.push(value[i]);
          }
        }
      }
    }
    return new_arr;
  }
}
