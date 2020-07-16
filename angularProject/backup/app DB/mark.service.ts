import { Injectable } from '@angular/core';
import { Mark } from './mark';

@Injectable({
  providedIn: 'root'
})
export class MarkService {
 
  constructor() { 
  }

  newMark():Mark{
    let m:Mark;
    m.counter=0;
    m.marks=[];
    m.res=0;
    return m;
  }
  setMarks(mark:Mark, ms:Array<number>):Mark {
    mark.marks=ms;
    mark.counter=mark.marks.length;
    this.updateResultMark(mark);
    return mark;
  }

  addMark(m:number, mark:Mark){
    if(String(m) !=='0'){
        mark.marks.push(Number(m));
        mark.counter++;
        this.updateResultMark(mark);
    }
  }

  updateResultMark(mark:Mark){
    let result=0;
    if(mark.counter>0){
      for(let m of mark.marks){
          result+=m;
      }
      result/=mark.counter;
    }
    mark.res=result;
  }

  getMark(mark:Mark):number{
    return mark.res;
  }



}
