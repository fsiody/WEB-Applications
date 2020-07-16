import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CourseService } from '../course-service.service';
import { Course } from '../course';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  course;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService) {


   }


  ngOnInit() {
    
    let id=this.route.snapshot.paramMap.get('id')
    this.course = this.courseService.getCourse(id);
  }

  
  deleteCourse(id:string){
    this.courseService.deleteCourse(id);
  };

  addMark(m:number, id:string){
    console.log(m," ",id)
   // this.courseService.getCourse(id).addMark(m);
  }

}
