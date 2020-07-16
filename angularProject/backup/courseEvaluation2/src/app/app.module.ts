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
import { CourseFilterPipe } from './course-filter.pipe';
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
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from "./guard/auth.guard";

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabaseModule } from '@angular/fire/database';
//import { AngularFirestoreModule } from 'angularfire2/firestore'; 


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
    CourseInfoComponent,
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
    RouterModule.forRoot([
      { path: '', component: CourseListComponent },
      { path: 'login', component: LoginComponent },
      { path: 'newCourse', component: NewCourseComponent},
      { path: 'course/:id', component: CourseInfoComponent},
   //   { path: '**', component: PageNotFoundComponent }
      
    ]),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  exports: [RouterModule],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
