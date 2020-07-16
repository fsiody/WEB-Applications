import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseService} from '../course-service.service';
import {NgForm} from '@angular/forms';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  //private courseService:CourseService;
 // courses:Array<Course>;
  
  pageNumber:number;
  coursesPerPage:number;
  filtering:boolean;
  name:string;
  semestr:string;
  omin:string; omax:string;
  emin:string; emax:string;
  
  filter={name:this.name, semestr:this.semestr, omin:this.omin, omax:this.omax, emin:this.emin, emax:this.emax};


  constructor(
    public courseService:CourseService,
    private route: ActivatedRoute,
    private router: Router,) { 
    this.pageNumber=1;
    this.coursesPerPage=5;
    this.filtering=false;
  }
  
  
  setCourses():void{
    this.courseService.getCourses();
  };

  deleteCourse(id:string){
    this.courseService.deleteCourse(id);
  };

  addMark(m:number, id:string){
    console.log(m," ",id)
    this.courseService.getCourse(id).addMark(m);
  }

  shownCourse(i:number):boolean{
    if(i >= (this.pageNumber-1)*this.coursesPerPage && !(i > this.pageNumber*this.coursesPerPage-1)){ return true;}
    else { return false; }
  }
  filterOn(){this.filtering=true;}
  filterOff(){this.filtering=false;}
  getFiltering():boolean{return this.filtering;}

  showNext(){
    if(this.courseService.courses.length/this.coursesPerPage>this.pageNumber) {
      this.pageNumber++;
    }
  }
  showPrev(){
    if(this.pageNumber>1) this.pageNumber--;
  }

  gotoDetail(id:string): void {
    console.log("GGGGGGGGGGGGGGGGGGOOOOOOOOOOOOOOOOOOO");
    this.router.navigate(['/course', id]);
  }


  ngOnInit() {
    this.setCourses();
  }

}


