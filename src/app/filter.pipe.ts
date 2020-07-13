import { Pipe, PipeTransform } from '@angular/core';
import { todo } from './app.component'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:todo [], filter: string): todo[] {
    let displayedObj: todo[]=[];
    if(filter){
      for(let obj of value){
        if(obj.item.toLowerCase().includes(filter.toLowerCase())){
          displayedObj.push(obj);
        }
      }
    }else{
      displayedObj = value;
    }
    return displayedObj;
  }

}
