import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course';

@Pipe({
  name: 'courseFilter'
})
export class CourseFilterPipe implements PipeTransform {


  transform(courses: Course[], filters: {name:string, semestr:string, 
    omin:string, omax:string, emin:string, emax:string}):Course[] {
    console.log(filters.emax +"   ^^^^^^^^6  ");
    if (!courses) return [];
    if (!filters || (filters.name==="" &&  filters.semestr==="" && filters.omin==="" &&
    filters.omax==="" && filters.emin==="" && filters.emax==="") ||
    (!filters.name &&  !filters.semestr && !filters.omin && !filters.omax && 
      !filters.emin && !filters.emax)) return courses;
    console.log(filters.name+"!!!!!!!!!!!!!!!!!!!!!");
    if(namef!=="") var namef = filters.name.toLowerCase();
    if(namef!=="") var semf = Number(filters.semestr);
    if(namef!=="") var ominf =  Number(filters.omin);
    if(namef!=="") var omaxf =  Number(filters.omax);
    if(namef!=="") var eminf =  Number(filters.emin);
    if(namef!=="") var emaxf =  Number(filters.emax);

    if(namef!=="") courses=courses.filter(course => { return course.name.toLowerCase().includes(namef);});
    if(semf!==NaN) courses=courses.filter(course => { return Number(course.semestr)==semf;});

    if(ominf!==NaN) courses=courses.filter(course => { return Number(course.mark.getMark())>=ominf;});
    if(omaxf!==NaN) courses=courses.filter(course => { return Number(course.mark.getMark())<=omaxf;});
    

    if(eminf!==NaN) courses=courses.filter(course => { return Number(course.ects)>=eminf;});
    if(emaxf!==NaN) courses=courses.filter(course => { return Number(course.ects)<=emaxf;});
    return courses;

    
    /*
    const keys       = Object.keys(filters).filter(key => filters[key]);
    const filterCourse = user => keys.every(key => user[key] === filters[key]);

    return keys.length ? list.filter(filterCourse) : list; */
  }


}
