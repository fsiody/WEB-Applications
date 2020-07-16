//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//import { AngularFireModule } from "@angular/fire";
//import { AngularFireAuthModule } from "@angular/fire/auth";
//import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { environment } from '../environments/environment';
//import { FormsModule } from '@angular/forms';
//import { Routes,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CourseService } from './course-service.service';
//import { LoginComponent } from './login/login.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NameFilterPipe } from './name-filter.pipe';
import { EctsFilterPipe } from './ects-filter.pipe';
import { SemestrFilterPipe } from './semestr-filter.pipe';
import { MarkFilterPipe } from './mark-filter.pipe';
import { CourseInfoComponent } from './course-info/course-info.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//import { AuthGuard } from "./guard/auth.guard";

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabaseModule } from '@angular/fire/database';
//import { AngularFirestoreModule } from 'angularfire2/firestore'; 
//import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AuthGuard } from "./guard/auth.guard";
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
 // { path: '', component: CourseListComponent },
  { path: 'courseList', component: CourseListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'course/:id', component: CourseInfoComponent, canActivate: [AuthGuard] },
   //   { path: '**', component: PageNotFoundComponent }
  { path: 'newCourse', component: NewCourseComponent, canActivate: [AuthGuard] },
]; 

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseListComponent,
    TopBarComponent,
    LoginComponent,
    NewCourseComponent,
    NameFilterPipe,
    EctsFilterPipe,
    SemestrFilterPipe,
    MarkFilterPipe,
    CourseInfoComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    AngularFireAuthModule, // do obsługi autentykacji
    AngularFirestoreModule, // do obslugi baz danych
    AngularFireDatabaseModule, // do obslugi baz danych
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
  ],
  exports: [RouterModule],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
