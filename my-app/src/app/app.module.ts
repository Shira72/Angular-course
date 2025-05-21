import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideHttpClient } from '@angular/common/http';
import { StudentsModule } from "./modules/students/student.module";
import { demoModule } from "./modules/demo/demo.module";

@NgModule({
    declarations:[AppComponent,ReactiveFormsModule],
    imports:[BrowserModule,FormsModule,NgModule,StudentsModule,demoModule],
    bootstrap:[AppComponent],
    providers:[provideHttpClient()],
})
export class AppModule{

}