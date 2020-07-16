import {Mark} from './mark'

export class Course {
    name:string;
    id: string;
    ects: number;
    semestr: number;
    form: string; // wykład, ćwiczenia, lab, projekt
    capacity: number;
    mark: Mark;
    image: string;
    description: string;

    constructor(){
    }
    
  //  setImg(){ this.image='assets/images/'+this.id+'.jpg';  }
    setImg(){ this.image='assets/images/agh.jpg';}

    addMark(m:number){
        this.mark.addMark(m);
    }
/*
    setCourseInfo(name:string, id: string, ects: number, semestr: number, form: string,
        capacity: number, mark: Mark, description: string):void{
        this.name=name;
        this.id=id;
        this.ects=ects;
        this.semestr=semestr;
        this.form=form; // wykład, ćwiczenia, lab, projekt
        this.capacity=capacity;
        this.mark=mark;
        this.setImg();
        this.description=description;
        } */


}
