import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userPackDescriptionPipe'
})
export class UserPackDescriptionPipePipe implements PipeTransform {

  transform(value: any, packageID:String){
    if(value.length===0){
      return value;
    }
    const resultArray=[];
    for(const item of value){
      if(item.packageID===packageID){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}


