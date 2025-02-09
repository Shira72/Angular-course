import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  imports:[CommonModule,ReactiveFormsModule]
})

export class StudentFormComponent {
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
    
  private _student!: Student;  

  public get student(): Student{
    return this._student;
  }
  @Input()
  public set student(value: Student){
    this._student= value;
    this.studentForm= new FormGroup({
      "id":new FormControl(this.student.id),
      "name":new FormControl(this.student.name,[Validators.required, Validators.minLength(3)]),
      "yearBook":new FormControl(this.student.yearBook,Validators.required),
      active:new FormControl(true)
    });
  }

  @Output()
  onSaveStudent:EventEmitter<Student>=new EventEmitter();
  
  studentForm!: FormGroup;
  saveStudent(){
    this.student.name=this.studentForm.controls['name'].value;
    this.student.yearBook=this.studentForm.controls['yearBook'].value;
    //if the fiels have the same name as the format it would be work good!!!!
   // this.student=this.studentForm.value
    this.onSaveStudent.emit(this.student);
    console.log("saveNewStudent")
  }
}
