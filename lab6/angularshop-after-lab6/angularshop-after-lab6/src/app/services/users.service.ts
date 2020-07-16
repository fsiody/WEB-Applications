import { Injectable } from '@angular/core';
import { User } from "../model/user";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private dbPath = '/users';
  private usersRef: AngularFirestoreCollection<User> = null;

  constructor(private db: AngularFirestore) {
    this.usersRef = db.collection(this.dbPath);
  }

  getUsers(): AngularFirestoreCollection<User> {
    return this.usersRef;
  }
}
