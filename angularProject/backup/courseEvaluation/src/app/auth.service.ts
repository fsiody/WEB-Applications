import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs/index';
import * as firebase from 'firebase/app';
export interface Credentials {
  email: string;
  password: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {
  readonly authState$: Observable<User | null> = this.fireAuth.authState;
/*
  constructor(private fireAuth: AngularFireAuth) {
    fireAuth.authState.subscribe(auth => {
      if(auth) {
        alert("Zalogowano");   
        console.log('logged in - zmiana stanu');
        console.log(auth);
      } else {
        alert("Wylogowano"); 
        console.log('not logged in - zmiana stanu');
        console.log(auth);
      }
    });
    console.log("Start");

  }*/
  constructor(private fireAuth: AngularFireAuth) {
    fireAuth.authState.subscribe(auth => {
      if(this.loggedIn()) {
        alert("Zalogowano");   
        console.log('logged in - zmiana stanu');
        console.log(auth);
      } else {
        alert("Wylogowano"); 
        console.log('not logged in - zmiana stanu');
        console.log(auth);
      }
    });
    console.log("Start");

  }

  getUser(): User | null {
    return this.fireAuth.auth.currentUser;
  }

  login({email, password}: Credentials) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  register({email, password}: Credentials) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fireAuth.auth.signOut();
  }

  loggedIn():boolean{
   // console.warn("CURR_USER:  ",this.fireAuth.auth.currentUser);
    if(this.fireAuth.auth.currentUser) return true;
    else return false;
  }
}