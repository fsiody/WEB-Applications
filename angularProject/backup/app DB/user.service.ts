import { Injectable } from '@angular/core';
import { UserData } from "./user-Data";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private dbPath = '/users';
  private usersRef: AngularFirestoreCollection<UserData> = null;

  constructor(private db: AngularFirestore) {
    this.usersRef = db.collection(this.dbPath);
  }

  getUsers(): AngularFirestoreCollection<UserData> {
    return this.usersRef;
  }
}
