import { Injectable } from '@angular/core';
//import { courses } from './courses';
import {Course} from './course'
import {Mark} from './mark'
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { MarkService } from './mark.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  private dbCourse = '/courses';
  private imgPath='gs://courseevaluatingsystem.appspot.com/agh.jpg';
  coursesRef: AngularFirestoreCollection<Course> = null;
  courses:any;

  constructor(private db: AngularFirestore, private ms:MarkService) {
    this.coursesRef = db.collection<Course>(this.dbCourse);
  //  this.courses=db.collection<Course>(this.dbCourse).valueChanges();
   // this.initDb(); 
  }

  getData():any {  return this.coursesRef;   //  return this.db.collection(this.dbPath).valueChanges();  // return this.courses;
  }

  getCourses(): AngularFirestoreCollection<Course> { return this.coursesRef; }

  saveCourse(course): Promise<any> {
    if (course.id != null) {
      return this.coursesRef.doc(course.id).update(course);
    } else {
      return this.coursesRef.add(course);
    }
  }

  deleteCourse(id: string): Promise<void> {  return this.coursesRef.doc(id).delete();}
 
  addCourse(item: Course) {  this.saveCourse(item); }

  getNewCourse(name:string, id: string, ects: number, semestr: number, form: string,
    capacity: number, mark: Array<number>, image:string, description: string): Course{
    var course: Course;
    course.name=name;
    course.id=id;
    course.ects=ects;
    course.semestr=semestr;
    course.form=form; // wykład, ćwiczenia, lab, projekt
    course.capacity=capacity;
    course.mark=mark;
    course.image=image;
    course.description=description;
    return course;
  }

  initDb() {
    this.addCourse(this.getNewCourse('Analiza matematyczna 1','am1', 6, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
    300, [2,5,3,2,3,2.5], this.imgPath, 'W ramach zajęć student powinien opanować podstawy rachunku różniczkowego i całkowego funkcji jednej zmiennej wraz z przykładowymi zastosowaniami.')),
    this.addCourse(this.getNewCourse('Analiza matematyczna 2', 'am2', 6, 2, 'wykład', // wykład, ćwiczenia, lab, projekt
    250, [2,5,3,2,3,2.5], this.imgPath,'W ramach zajęć student powinien opanować podstawy rachunku różniczkowego funkcji wielu zmiennych, całki wielokrotne i krzywoliniowe oraz teorię szeregów liczbowych, potęgowych i Fouriera .')),
    this.addCourse(this.getNewCourse( 'Matematyka Dyskretna','md', 5, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
    300, [2,5,3,2,3,2.5], this.imgPath,'Zapoznanie z podstawowymi pojęciami, metodami oraz problemami matematyki dyskretnej pod kątem zastosowań w modelowaniu systemów informatycznych.')),
    this.addCourse(this.getNewCourse('Wstęp do informatyki', 'wdi', 6, 1, 'wykład', // wykład, ćwiczenia, lab, projekt
    300, [2,5,3,2,3,2.5],this.imgPath, 'Celem przedmiotu jest zapoznanie studentów z podstawowymi pojęciami informatyki, programowaniem w języku proceduralnym oraz wprowadzenie do podstawowych algorytmów i struktur danych.')),
    this.addCourse(this.getNewCourse('Wprowadzenie do systemu UNIX','unix', 2, 1,'wykład', // wykład, ćwiczenia, lab, projekt
    300, [2,5,3,2,3,2.5], this.imgPath,'Celem modułu jest wyposażenie studenta/studentki w umiejętność korzystania z systemu operacyjnego UNIX i na nim bazujących wykorzystując wiedzę o jego budowie i umiejętności praktyczne.')),
    this.addCourse(this.getNewCourse('Algorytmy i struktury danych', 'asd', 6, 2,'wykład', // wykład, ćwiczenia, lab, projekt
    250, [2,5,3,2,3,2.5],this.imgPath, 'Przedmiot zapoznaje studentów z podstawowymi algorytmami, strukturami danych, oraz metodami tworzenia i analizy algorytmów',))
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