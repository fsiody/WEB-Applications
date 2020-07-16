import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CourseService } from './course-service.service';
import { LoginComponent } from './login/login.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseFilterPipe } from './course-filter.pipe';
import { NameFilterPipe } from './name-filter.pipe';
import { EctsFilterPipe } from './ects-filter.pipe';
import { SemestrFilterPipe } from './semestr-filter.pipe';
import { MarkFilterPipe } from './mark-filter.pipe';
import { CourseInfoComponent } from './course-info/course-info.component';

const routes: Routes = []; 

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseListComponent,
    TopBarComponent,
    LoginComponent,
    NewCourseComponent,
    CourseFilterPipe,
    NameFilterPipe,
    EctsFilterPipe,
    SemestrFilterPipe,
    MarkFilterPipe,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CourseListComponent },
      { path: 'login', component: LoginComponent },
      { path: 'newCourse', component: NewCourseComponent},
      { path: 'course/:id', component: CourseInfoComponent},
   //   { path: '**', component: PageNotFoundComponent }
      
    ])
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
