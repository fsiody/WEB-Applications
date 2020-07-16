export class Mark {
    res:number;
    counter: number;
    marks: Array<number>;

    constructor(ms:Array<number>){
        this.counter=ms.length;
        this.marks=ms;
        this.setMark();
        
    }

    setMark():void {
        let result=0;
        for(let m of this.marks){
            result+=m;
        }
        result/=this.counter;
        this.res=result;
    }

    addMark(m:number){
        if(String(m) !=='0'){
            this.marks.push(Number(m));
            this.counter++;
            this.setMark();
        }
    }

    getMark():number{
        return this.res;
    }
}
