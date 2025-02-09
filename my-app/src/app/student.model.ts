
export class Student{
    id: number;
    name: string;
    yearBook: number;
    active: boolean;
    marks?: { subject: string, mark: number }[];
   
    
    constructor(name:string,yearBook:number,active:boolean){
        this.id=0;
        this.name=name;
        this.yearBook=yearBook;
        this.active=true;
    }
}