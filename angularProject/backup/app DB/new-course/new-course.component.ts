import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CourseService} from '../course-service.service';
import { Course } from '../course';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
//  infoItems;
  newCourseInfo:FormGroup;
  course: Course;

  constructor(private formBuilder: FormBuilder, public cs: CourseService) {
    //  this.course=new Course;
     // this.infoItems=this.courseService.getItems();
  /*    this.newCourseInfo=this.formInfo.group({
        name : '',
        id: '', //            string < 4
        ects: '', //     -1 < number < 30
        semestr: '', //   0 < number < 10
        form: '', //          string = wykład, ćwiczenia, lab, projekt
        capacity: '', //  0 < number
        image: '',   
        description: '', 
      }) */
  }

  ngOnInit():void {
    this.newCourseInfo=this.formBuilder.group({
      name : new FormControl(this.course.name, 
        [ Validators.required]),
      id:   new FormControl(this.course.id, 
        [Validators.required, Validators.maxLength(4)]), //            string < 4
      ects: new FormControl( this.course.ects, 
        [Validators.required, Validators.max(40), Validators.min(0)]), //     -1 < number < 30
      semestr: new FormControl( this.course.semestr, 
        [Validators.required, Validators.max(12), Validators.min(0)]), //   0 < number < 10
      form: new FormControl( this.course.form, 
        [Validators.required]), //          string = wykład, ćwiczenia, lab, projekt
      capacity: new FormControl( this.course.capacity, 
        [Validators.required, Validators.min(0)]), //  0 < number
    //  image: new FormControl( this.course.image,   [Validators.required]),   
      description: new FormControl( this.course.ects, 
        [Validators.required]),
    })

  }

  onSubmit(){
    // TODO: Use EventEmitter with form value
    console.log(this.newCourseInfo.value); //warn?
    console.warn('***************** Course information has been submitted *****************');
    console.log(" AAAAAAAAAAAAAAAADDDDDDDDDDDDDDDDDDDDD "); //warn?
    this.cs.addCourse(this.course);
    console.log(" !!!!!!!!!!!!!!!!!!!!! "); //warn?
   // this.infoItems = this.courseService.clearInfo();
    this.newCourseInfo.reset();

  }


}
