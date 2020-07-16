import { Injectable } from '@angular/core';
//import { courses } from './courses';
import {Course} from './course'
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, associateQuery, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { MarkService } from './mark.service';
import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { AngularFireStorage } from '@angular/fire/storage';
import { core } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  private dbCourse = '/courses';
  private imgPath='https://firebasestorage.googleapis.com/v0/b/courseevaluatingsystem.appspot.com/o/agh.jpg?alt=media&token=4c015a8e-7098-4e3c-b685-ba3f18fa714f';
  coursesRef: AngularFirestoreCollection<Course> = null;
  courses:any;
  course:any;

  constructor(private db: AngularFirestore, private ms:MarkService,
    private afStorage: AngularFireStorage) {
    this.coursesRef = db.collection<Course>(this.dbCourse);
    //this.initDb(); 
  }

  getCourses(): AngularFirestoreCollection<Course> { return this.coursesRef; }

  saveCourse(course): Promise<any> {
    console.info("saving...");
    if (course.key != null) {
      return this.coursesRef.doc(course.id).update(course);
    } else {
      return this.coursesRef.doc(course.id).set(course);
    }
  }

  deleteCourse(id: string): Promise<void> {  return this.coursesRef.doc(id).delete();}
  
  getCourse(id: string):any {  
    return this.db.doc(this.dbCourse+'/'+id).valueChanges();
  }

  addCourse(item: Course) { console.info("adding..  ", item);  this.saveCourse(item); }

  getNewCourse(name:string, id: string, ects: number, semestr: number, form: string,
    capacity: number, mark: Array<number>, image:string, description: string): Course{
    
    console.info("gettingNewCourse...");
    var course:Course={
      name:name, id: id, ects: ects, semestr: semestr, form: form,
      capacity: capacity, mark: mark, image:image, description: description};
    console.info(course);
    return course;
  }
  setImg(course:Course){ course.image=this.imgPath; }

  initDb() {
    console.info("init...");
    this.addCourse(this.getNewCourse('Analiza matematyczna 1','am1', 6, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
    300, [2,5,3,2,3,2.5], this.imgPath, 'W ramach zajęć student powinien opanować podstawy rachunku różniczkowego i całkowego funkcji jednej zmiennej wraz z przykładowymi zastosowaniami.'))
    /*
    ,this.addCourse(this.getNewCourse('Analiza matematyczna 2', 'am2', 6, 2, 'wykład', // wykład, ćwiczenia, lab, projekt
    250, [2,5,3,2,3,2.5], this.imgPath,'W ramach zajęć student powinien opanować podstawy rachunku różniczkowego funkcji wielu zmiennych, całki wielokrotne i krzywoliniowe oraz teorię szeregów liczbowych, potęgowych i Fouriera .')),
    this.addCourse(this.getNewCourse( 'Matematyka Dyskretna','md', 5, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
    300, [2,5,3,2,3,2.5], this.imgPath,'Zapoznanie z podstawowymi pojęciami, metodami oraz problemami matematyki dyskretnej pod kątem zastosowań w modelowaniu systemów informatycznych.')),
    this.addCourse(this.getNewCourse('Wstęp do informatyki', 'wdi', 6, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
    300, [2,5,3,2,3,2.5],this.imgPath, 'Celem przedmiotu jest zapoznanie studentów z podstawowymi pojęciami informatyki, programowaniem w języku proceduralnym oraz wprowadzenie do podstawowych algorytmów i struktur danych.')),
    this.addCourse(this.getNewCourse('Wprowadzenie do systemu UNIX','unix', 2, 1,'wykład', // wykład, ćwiczenia, lab, projekt
    300, [2,5,3,2,3,2.5], this.imgPath,'Celem modułu jest wyposażenie studenta/studentki w umiejętność korzystania z systemu operacyjnego UNIX i na nim bazujących wykorzystując wiedzę o jego budowie i umiejętności praktyczne.')),
    this.addCourse(this.getNewCourse('Algorytmy i struktury danych', 'asd', 6, 2,'wykład', // wykład, ćwiczenia, lab, projekt
    250, [2,5,3,2,3,2.5],this.imgPath, 'Przedmiot zapoznaje studentów z podstawowymi algorytmami, strukturami danych, oraz metodami tworzenia i analizy algorytmów',))
  */
  }
}
/*
  initDb() {
    this.addCourse(this.getNewCourse('Analiza matematyczna 1','am1', 6, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
    300, this.ms.setMarks(this.ms.newMark(),[2,5,3,2,3,2.5]), this.imgPath, 'W ramach zajęć student powinien opanować podstawy rachunku różniczkowego i całkowego funkcji jednej zmiennej wraz z przykładowymi zastosowaniami.')),
    this.addCourse(this.getNewCourse('Analiza matematyczna 2', 'am2', 6, 2, 'wykład', // wykład, ćwiczenia, lab, projekt
    250, this.ms.setMarks(this.ms.newMark(),[2,5,3,2,3,2.5]), this.imgPath,'W ramach zajęć student powinien opanować podstawy rachunku różniczkowego funkcji wielu zmiennych, całki wielokrotne i krzywoliniowe oraz teorię szeregów liczbowych, potęgowych i Fouriera .')),
    this.addCourse(this.getNewCourse( 'Matematyka Dyskretna','md', 5, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
    300, this.ms.setMarks(this.ms.newMark(),[2,5,3,2,3,2.5]), this.imgPath,'Zapoznanie z podstawowymi pojęciami, metodami oraz problemami matematyki dyskretnej pod kątem zastosowań w modelowaniu systemów informatycznych.')),
    this.addCourse(this.getNewCourse('Wstęp do informatyki', 'wdi', 6, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
    300, this.ms.setMarks(this.ms.newMark(),[2,5,3,2,3,2.5]),this.imgPath, 'Celem przedmiotu jest zapoznanie studentów z podstawowymi pojęciami informatyki, programowaniem w języku proceduralnym oraz wprowadzenie do podstawowych algorytmów i struktur danych.')),
    this.addCourse(this.getNewCourse('Wprowadzenie do systemu UNIX','unix', 2, 1,'wykład', // wykład, ćwiczenia, lab, projekt
    300, this.ms.setMarks(this.ms.newMark(),[2,5,3,2,3,2.5]), this.imgPath,'Celem modułu jest wyposażenie studenta/studentki w umiejętność korzystania z systemu operacyjnego UNIX i na nim bazujących wykorzystując wiedzę o jego budowie i umiejętności praktyczne.')),
    this.addCourse(this.getNewCourse('Algorytmy i struktury danych', 'asd', 6, 2,'wykład', // wykład, ćwiczenia, lab, projekt
    250, this.ms.setMarks(this.ms.newMark(),[2,5,3,2,3,2.5]),this.imgPath, 'Przedmiot zapoznaje studentów z podstawowymi algorytmami, strukturami danych, oraz metodami tworzenia i analizy algorytmów',))
  }


*/