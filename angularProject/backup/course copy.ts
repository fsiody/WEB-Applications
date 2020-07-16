import {Mark} from './mark'

export class Course {
    name:string;
    id: string;
    ects: number;
    semestr: number;
    form: string; // wyk³ad, æwiczenia, lab, projekt
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
        this.form=form; // wyk³ad, æwiczenia, lab, projekt
        this.capacity=capacity;
        this.mark=mark;
        this.setImg();
        this.description=description;
        } */


}
