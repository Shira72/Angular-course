import { Component } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';
import { StudentFormComponent } from "../student-form/student-form.component";


@Component({
  selector: 'student-list',
  imports: [CommonModule, StudentFormComponent],
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {
   students: Student[]=[
      {id:1,name:"Yakov",yearBook:12,active:true, marks:[
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
   selectedStudent: Student | undefined;


   DeleteStudent(student:Student){
      let studentToDelete=this.students.indexOf(student);
      this.students.splice(studentToDelete,1);
   }
   showDetails(studentToShow: Student){
      this.selectedStudent=studentToShow;
   }
   showNewStudent(){
    this.selectedStudent=new Student("new student name",2020,false);
    console.log("show new student");
    
   }
   addStudentToList(studentToSave:Student){
      if(studentToSave.id==0){
         console.log("addStudentToList")
         studentToSave.id=this.students.length + 1;
         this.students.push(studentToSave);
      }
      else{
         let taskToUpdate=this.students.filter(x=>x.id==studentToSave.id)[0];
         let index= this.students.indexOf(taskToUpdate);
         this.students[index]=studentToSave;
      }
    //this.selectedStudent=null;
    this.selectedStudent = undefined;
   }
  // constructor(students: Student []){
  //   this.students=students;
  // }
  
}

