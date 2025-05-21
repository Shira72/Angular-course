import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { studentService } from '../student.service';


@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  imports:[CommonModule,ReactiveFormsModule]
})

export class StudentFormComponent {
  students: Student[]; 
  constructor(private _studentService: studentService){
    this.students=_studentService.getStudents();
  }  

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
