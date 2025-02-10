import { Injectable } from "@angular/core";
import { Student } from "./student.model";

@Injectable({
    providedIn: 'root'
})
export class studentService{
    getStudents(): Student[]{
        return [
            {id:1,name:"Yakov from service",yearBook:12,active:true, marks:[
              { subject: "Math", mark: 95 },
              { subject: "English", mark: 88 },
              { subject: "Science", mark: 92 }
            ]},
            {id:2,name:"Shulamit",yearBook:9,active:true, marks:[
              { subject: "Math", mark: 95 },
              { subject: "English", mark: 88 },
              { subject: "Science", mark: 92 }
            ] },
            {id:3,name:"Shoshana",yearBook:4,active:true, marks:[
              { subject: "Math", mark: 95 },
              { subject: "English", mark: 88 },
              { subject: "Science", mark: 92 }
            ]}];   
    }
}