import { core } from "@angular/compiler";
import {Component} from "@angular/core";
import { StudentListComponent } from "./modules/students/student-list/student-list.component";
import { StudentFormComponent } from "./modules/students/student-form/student-form.component";
import { ObservableDemoComponent } from "./modules/demo/observable-demo/observable-demo.component";



@Component({
    //template:"<h1>hello this is my project<h1>",
    templateUrl:"app.component.html",
    selector:"app-root",
    imports: [StudentListComponent, StudentFormComponent, ObservableDemoComponent],
   

  })

  
export class AppComponent{
    name:string="miri";
    age:number=18;
   

}
