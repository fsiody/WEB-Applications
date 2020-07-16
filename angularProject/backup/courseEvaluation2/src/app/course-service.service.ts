import { Injectable } from '@angular/core';
//import { courses } from './courses';
import {Course} from './course'
import {Mark} from './mark'
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

export interface Cr{
  name:string;
  id: string;
  ects: number;
  semestr: number;
  form: string; // wykład, ćwiczenia, lab, projekt
  capacity: number;
  mark: Mark;
  image: string;
  description: string;

}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  private dbPath = '/courses';
  productsRef: AngularFirestoreCollection<Course> = null;
  courses:any;

  constructor(private db: AngularFirestore) {
    console.warn("constructing..");
  //  this.productsRef = db.collection(this.dbPath);
    this.courses=db.collection<Cr>(this.dbPath).valueChanges();
    console.warn(this.courses);
   // this.initDb(); 
  }

  getData():any {
  //  return this.db.collection(this.dbPath).snapshotChanges(); 
  //  return this.db.collection(this.dbPath).valueChanges(); 
    return this.courses;
  }
  // This is for fast data initialization. Uncomment function execution in the constructor
  initDb() {
    this.saveCourse(this.getNewCourse('Analiza matematyczna 1','am1', 6, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
    300, new Mark([2,5,3,2,3,2.5]), 'W ramach zajęć student powinien opanować podstawy rachunku różniczkowego i całkowego funkcji jednej zmiennej wraz z przykładowymi zastosowaniami.')),
    this.saveCourse(this.getNewCourse('Analiza matematyczna 2', 'am2', 6, 2, 'wykład', // wykład, ćwiczenia, lab, projekt
    250, new Mark([2,5,3,2,5,2.5]), 'W ramach zajęć student powinien opanować podstawy rachunku różniczkowego funkcji wielu zmiennych, całki wielokrotne i krzywoliniowe oraz teorię szeregów liczbowych, potęgowych i Fouriera .')),
    this.saveCourse(this.getNewCourse( 'Matematyka Dyskretna','md', 5, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
    300, new Mark([2,5,3,4,3,3.5]), 'Zapoznanie z podstawowymi pojęciami, metodami oraz problemami matematyki dyskretnej pod kątem zastosowań w modelowaniu systemów informatycznych.')),
    this.saveCourse(this.getNewCourse('Wstęp do informatyki', 'wdi', 6, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
    300, new Mark([4,5,4,5,4.5]), 'Celem przedmiotu jest zapoznanie studentów z podstawowymi pojęciami informatyki, programowaniem w języku proceduralnym oraz wprowadzenie do podstawowych algorytmów i struktur danych.')),
    this.saveCourse(this.getNewCourse('Wprowadzenie do systemu UNIX','unix', 2, 1,'wykład', // wykład, ćwiczenia, lab, projekt
    300, new Mark([5,5,5,5,3,4.5]), 'Celem modułu jest wyposażenie studenta/studentki w umiejętność korzystania z systemu operacyjnego UNIX i na nim bazujących wykorzystując wiedzę o jego budowie i umiejętności praktyczne.')),
    this.saveCourse(this.getNewCourse('Algorytmy i struktury danych', 'asd', 6, 2,'wykład', // wykład, ćwiczenia, lab, projekt
    250, new Mark([4,5,4,5,3,5,5]), 'Przedmiot zapoznaje studentów z podstawowymi algorytmami, strukturami danych, oraz metodami tworzenia i analizy algorytmów',))
  }

  getCourses(): AngularFirestoreCollection<Course> {
    return this.productsRef;
  }

  saveCourse(course): Promise<any> {
    if (course.id != null) {
      return this.productsRef.doc(course.id).update(course);
    } else {
      return this.productsRef.add(course);
    }
  }

  deleteCourse(id: string): Promise<void> {
    return this.productsRef.doc(id).delete();
  }
 
/* 
  getCourse(key: string):Course{
    return this.productsRef.doc(key).get();
  }
  getCourse (id: string): Observable<any> {
    return this.db.object(this.path + id).valueChanges(); }

  getCourse(id:string):Course{
    for (let c of this.courses){
      if(c.id==id){
        const index:number = this.courses.indexOf(c);
        if(index!=0-1){
          return c;
        }
      }
    }
  }; */


  addCourse(item: Course) {
    this.saveCourse(item); }

   /*
  addCourse(item: Course) {
    this.db.list(this.path).set(String(item.id), item); }
  
  
  addCourse(c:Course){
    console.log(" CS ADDED "); //warn?
    this.courses.push(c);
  };
*/


  getNewCourse(name:string, id: string, ects: number, semestr: number, form: string,
    capacity: number, mark: Mark, description: string): Course{
    var course=new Course;
    course.name=name;
    course.id=id;
    course.ects=ects;
    course.semestr=semestr;
    course.form=form; // wykład, ćwiczenia, lab, projekt
    course.capacity=capacity;
    course.mark=mark;
    course.setImg();
    course.description=description;
    return course;
  }
/*
  
  getCourses(): Observable<any[]> {
    return this.db.list(this.path).valueChanges(); }
getCourses() //:Array<Course>{
  {
    this.courses = [ 
      this.getNewCourse('Analiza matematyczna 1','am1', 6, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
      300, new Mark([2,5,3,2,3,2.5]), 'W ramach zajęć student powinien opanować podstawy rachunku różniczkowego i całkowego funkcji jednej zmiennej wraz z przykładowymi zastosowaniami.'),
      this.getNewCourse('Analiza matematyczna 2', 'am2', 6, 2, 'wykład', // wykład, ćwiczenia, lab, projekt
      250, new Mark([2,5,3,2,5,2.5]), 'W ramach zajęć student powinien opanować podstawy rachunku różniczkowego funkcji wielu zmiennych, całki wielokrotne i krzywoliniowe oraz teorię szeregów liczbowych, potęgowych i Fouriera .'),
      this.getNewCourse( 'Matematyka Dyskretna','md', 5, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
      300, new Mark([2,5,3,4,3,3.5]), 'Zapoznanie z podstawowymi pojęciami, metodami oraz problemami matematyki dyskretnej pod kątem zastosowań w modelowaniu systemów informatycznych.'),
      this.getNewCourse('Wstęp do informatyki', 'wdi', 6, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
      300, new Mark([4,5,4,5,4.5]), 'Celem przedmiotu jest zapoznanie studentów z podstawowymi pojęciami informatyki, programowaniem w języku proceduralnym oraz wprowadzenie do podstawowych algorytmów i struktur danych.'),
      this.getNewCourse('Wprowadzenie do systemu UNIX','unix', 2, 1,'wykład', // wykład, ćwiczenia, lab, projekt
      300, new Mark([5,5,5,5,3,4.5]), 'Celem modułu jest wyposażenie studenta/studentki w umiejętność korzystania z systemu operacyjnego UNIX i na nim bazujących wykorzystując wiedzę o jego budowie i umiejętności praktyczne.'),
      this.getNewCourse('Algorytmy i struktury danych', 'asd', 6, 2,'wykład', // wykład, ćwiczenia, lab, projekt
      250, new Mark([4,5,4,5,3,5,5]), 'Przedmiot zapoznaje studentów z podstawowymi algorytmami, strukturami danych, oraz metodami tworzenia i analizy algorytmów',),
    
      this.getNewCourse('Algebra','ag', 6, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
      300, new Mark([2,5,3,2,3,2.5]), 'W ramach zajęć student powinien opanować podstawy rachunku różniczkowego i całkowego funkcji jednej zmiennej wraz z przykładowymi zastosowaniami.'),
      this.getNewCourse('Fizyka 1', 'f1', 6, 2, 'wykład', // wykład, ćwiczenia, lab, projekt
      250, new Mark([2,5,3,2,5,2.5]), 'W ramach zajęć student powinien opanować podstawy rachunku różniczkowego funkcji wielu zmiennych, całki wielokrotne i krzywoliniowe oraz teorię szeregów liczbowych, potęgowych i Fouriera .'),
      this.getNewCourse( 'Programowanie imperatywne','pi', 4, 2, 'wykład', // wykład, ćwiczenia, lab, projekt
      300, new Mark([2,5,3,4,3,3.5]), 'Zapoznanie z podstawowymi pojęciami, metodami oraz problemami matematyki dyskretnej pod kątem zastosowań w modelowaniu systemów informatycznych.'),
      this.getNewCourse('Logika matematyczna', 'lm', 4, 2, 'wykład', // wykład, ćwiczenia, lab, projekt
      300, new Mark([4,5,4,5,4.5]), 'Celem przedmiotu jest zapoznanie studentów z podstawowymi pojęciami informatyki, programowaniem w języku proceduralnym oraz wprowadzenie do podstawowych algorytmów i struktur danych.'),
      this.getNewCourse('Programowanie funkcyjne','pf', 2, 3,'wykład', // wykład, ćwiczenia, lab, projekt
      300, new Mark([5,5,5,5,3,4.5]), 'Celem modułu jest wyposażenie studenta/studentki w umiejętność korzystania z systemu operacyjnego UNIX i na nim bazujących wykorzystując wiedzę o jego budowie i umiejętności praktyczne.'),
      this.getNewCourse('Metody obliczeniowe w nauce i technice', 'mownit', 3, 3,'wykład', // wykład, ćwiczenia, lab, projekt
      250, new Mark([4,5,4,5,3,5,5]), 'Przedmiot zapoznaje studentów z podstawowymi algorytmami, strukturami danych, oraz metodami tworzenia i analizy algorytmów',),
    ];
    //return this.courses;
  }; */
  
   
/*
updateCourse(item: Course) {
  this.db.object(this.path + item.id).update(item); }

//deleteCourse(item: Course) {
deleteCourse(id: string) {
  this.db.object(this.path + id).remove(); }

  deleteCourse(id:string){
    for (let c of this.courses){
      if(c.id==id){
        const index:number = this.courses.indexOf(c);
        if(index!=0-1){
          this.courses.splice(index,1);
        }
      }
    }
  };
  */

}