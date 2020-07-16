import { Pipe, PipeTransform } from '@angular/core';
import { Course} from "./course"

@Pipe({
  name: 'markFilter'
})
export class MarkFilterPipe implements PipeTransform {

 
  transform(courses: Course[],  omin:string, omax:string):Course[] {
    if (!courses) return [];
    if ((omin==="" && omax==="") || (!omin && !omax)) return courses;
    if(omin!=="" && omin) var ominf =  Number(omin);
    if(omax!=="" && omax) var omaxf =  Number(omax);
    
    if(ominf!==NaN && ominf) courses=courses.filter(course => { return Number(course.mark.getMark())>=ominf;});
    if(omaxf!==NaN && omaxf) courses=courses.filter(course => { return Number(course.mark.getMark())<=omaxf;});
    return courses;  
  }
}
