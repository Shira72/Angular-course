import { NgModule, OnInit } from "@angular/core";
import { ObservableDemoComponent } from "./observable-demo/observable-demo.component";
import { ParentLifeComponent } from "./life-cycle-demo/parent-life/parent-life.component";
import { ChildLifeComponent } from "./life-cycle-demo/child-life/child-life.component";
import { CommonModule } from "@angular/common";
@NgModule({
    declarations : [ ObservableDemoComponent, ParentLifeComponent, ChildLifeComponent],
    imports: [CommonModule],
    exports: [],
})

export class demoModule implements OnInit {
    constructor() {
        console.log("Demo Module Loaded");
    }
    ngOnInit(): void {
        console.log("Demo Module Initialized");
    }   

}