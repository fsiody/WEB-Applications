import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs/index';
import * as firebase from 'firebase/app';
import { UsersService } from './user.service';

import { map } from 'rxjs/operators';

export class Credentials {
  email: string = '';
  password: string = '';
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  readonly authState$: Observable<User | null> = this.afAuth.authState;
  users: any;
  user:User;

  constructor(public afAuth: AngularFireAuth, private usersService: UsersService) {
    afAuth.authState.subscribe(auth => {
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
    this.init();
  }

  init() {
    this.usersService.getUsers().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(users => {
      this.users = users;
    });
  }

  getUser(): User | null {  return this.afAuth.auth.currentUser;}

  isLoggedIn() {return this.user != null;}

  isUserAdmin(): boolean {
    let isAdmin = false;
    this.users.forEach(user => {
      if (user.email == this.user.email) {
        isAdmin = true;
        return;
      }
    });

    return isAdmin;
  }

  login({ email, password }: Credentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  register({ email, password }: Credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    localStorage.removeItem('user');
    return this.afAuth.auth.signOut();
  }
}
