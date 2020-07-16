import { Injectable } from '@angular/core';
//import { courses } from './courses';
import {Course} from './course'
import {Mark} from './mark'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: Array<Course>;
  constructor() {  
    this.getCourses();
  }

  getCourse(id:string):Course{
    for (let c of this.courses){
      if(c.id==id){
        const index:number = this.courses.indexOf(c);
        if(index!=0-1){
          return c;
        }
      }
    }
  };

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
  };
  
  addCourse(c:Course){
    console.log(" CS ADDED "); //warn?
    this.courses.push(c);
  };
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
}
