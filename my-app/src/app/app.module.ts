import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
//import { Student } from "./student.model";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { studentService } from "./student.service";


@NgModule({
    declarations:[AppComponent,StudentListComponent,StudentDetailsComponent,StudentFormComponent,ReactiveFormsModule],
    imports:[BrowserModule,FormsModule,NgModule],
    bootstrap:[AppComponent],
    providers:[studentService],
})
export class AppModule{

}