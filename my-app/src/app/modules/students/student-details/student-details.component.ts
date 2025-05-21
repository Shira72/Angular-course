import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'student-details',
  imports: [CommonModule],
  templateUrl: './student-details.component.html'

})
export class StudentDetailsComponent {
  @Input()
  student!:Student

  @Output()
  onSaveNewStudent:EventEmitter<Student>=new EventEmitter();
  
saveNewStudent(){
    this.onSaveNewStudent.emit(this.student);
    console.log("saveNewStudent")
  
  }
}
