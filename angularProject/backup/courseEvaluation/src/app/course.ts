export interface Course {
    name:string;
    id: string;
    ects: number;
    semestr: number;
    form: string; // wykład, ćwiczenia, lab, projekt
    capacity: number;
    mark: Map<string,number>;
    marks: Array<any>;
    image: string;
    description: string;

   // constructor(init?:Partial<Course>);


}
