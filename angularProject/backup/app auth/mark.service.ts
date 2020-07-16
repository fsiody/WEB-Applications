import { Injectable } from '@angular/core';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class MarkService {
 
  constructor() { 
  }

  addMark(m:number, course:Course) {if(String(m) !=='0') course.mark.push(Number(m)); }

  getMark(mark:Array<number>):number{
    let result=0; 
    let counter=0;
    if(mark && mark.length>0){
      for(let m of mark){
          if(m!=0) {
            result+=m;
            counter++;
          }
      }
      result/=counter;
    }
    return result;
  }



}
