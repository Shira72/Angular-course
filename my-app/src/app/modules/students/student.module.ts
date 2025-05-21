import { NgModule } from "@angular/core";
import { studentService } from "./student.service";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [StudentListComponent,StudentDetailsComponent,StudentFormComponent],
    imports: [FormsModule,NgModule],
    providers: [studentService],
    exports: [StudentListComponent]
})

export class StudentsModule {
 

}
