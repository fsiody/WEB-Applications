import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule }  from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from './auth.guard';
import {APP_BASE_HREF} from '@angular/common';

const ROUTES = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

const firebaseConfig = {
  apiKey: "AIzaSyBjOmFv3il1fNt7xlCBuvbeHSGxrjNKqZI",
  authDomain: "listakomentarzy-e981e.firebaseapp.com",
  databaseURL: "https://listakomentarzy-e981e.firebaseio.com",
  projectId: "listakomentarzy-e981e",
  storageBucket: "listakomentarzy-e981e.appspot.com",
  messagingSenderId: "745908412191",
  appId: "1:745908412191:web:090f06f8653fb028f0da2a"
  };

@NgModule({
  imports: [ 
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(ROUTES),
    AngularFireAuthModule,
  ],
  declarations: [ AppComponent, LoginComponent, DashboardComponent],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
