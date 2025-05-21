import { Injectable } from "@angular/core";
import { Student } from "./student.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

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
    getStudentsFromService(){
      return this._http.get<Student[]>("/api/student")
    }
    getActiveStudentsFromService(isActive:Boolean){
      return this._http.get<Student[]>("/api/student?isActive="+isActive)
    }
    saveStudents(studentsList: Student[]): Observable<boolean>{
      return this._http.post<boolean>("/api/student",studentsList);
    }
    getValue():Promise<number>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(2);
        },3000);
      });
    }
    callFunc(){
      console.log("before call getValue");

      this.getValue().then((value)=>{
        console.log("in get value",value);
      })
      .catch((err)=>{
        console.log("error from call getValue")
      })
      console.log("after call getValue");

    }
    constructor(private _http:HttpClient){
      this.callFunc()
    }
}