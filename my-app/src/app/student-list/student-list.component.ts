import { Component } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';
import { StudentFormComponent } from "../student-form/student-form.component";
import { studentService } from '../student.service';


@Component({
  selector: 'student-list',
  imports: [CommonModule, StudentFormComponent],
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {
   students: Student[];   
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

   showActiveStudents(isActive:boolean){
      this._studentService.getActiveStudentsFromService(isActive).subscribe(data =>{
         this.students=data;
      },err =>{
         alert(err)
      })
   }
   saveStudentsToServer(){
      this._studentService.saveStudents(this.students).subscribe(data => {
         if (data)
            alert("save success!");
         else
            alert("save failed!")
      }, err => {
         alert(err)
      });
   }
  constructor(private _studentService:studentService){
    this.students=_studentService.getStudents();
    this._studentService.callFunc();
    this._studentService.getStudentsFromService().subscribe(data=>{
      this.students=data;
    })

  }
  
}

