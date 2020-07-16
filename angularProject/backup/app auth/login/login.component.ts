import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { UserData } from '../user-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:{
    id:string;
    email:string;
  }
  data: UserData = { 
    uid: this.user.id,
    email: this.user.email,
    roles: { 
      admin: true,
      reader: true 
    }
  }
  constructor(public afAuth: AngularFireAuth,private router: Router ) { }

  ngOnInit() {
  }


  private checkAuthorization (user: UserData, allowedRoles: string[]): boolean {
    if (!user) return false;
    for (const role of allowedRoles ) {if (user.roles[role]) { return true; }}
  }

  CanRead(user: UserData): boolean {
    const allowed = ['admin', 'edytor', 'reader'];
    return this.checkAuthorization(user,allowed);
  }
  CanEdit(user: UserData): boolean {
    const allowed = ['admin', 'edytor'];
    return this.checkAuthorization(user,allowed);
  }

  CanDelete(user: UserData): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user,allowed);
  }

  


  SignUpUser (email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((result) => { /* Np. wyslij mail w celu weryfikacji */ })
    .catch((error) => { window.alert(error.message) })
    }

  SignInUser (email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((result) => { localStorage.setItem('user', JSON.stringify(result)); } )
    .catch((error) => { console.log(error.message); })
  }

  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
    localStorage.removeItem('user');
    this.router.navigate(['sign-in']);
    })
  }
}
