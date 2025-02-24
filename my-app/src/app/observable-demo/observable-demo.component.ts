import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from  'rxjs/operators'
@Component({
  selector: 'observable-demo',
  imports: [],
  templateUrl: './observable-demo.component.html'
})
export class ObservableDemoComponent {
  source: Observable<number>= new Observable((observable)=>{
    observable.next(1);
    observable.next(2);
    observable.next(3);
    setTimeout(()=>{
      observable.next(4)
    },2000);
    observable.error("error fronm observable")

   // observable.complete()
  })

  x?: number;
  constructor() {
    this.source.pipe(map(x => { return x *3; }), filter( x => {return x%2 == 0;})).subscribe(
      (val) => { 
        this.x = val;
        console.log("observable next is:" + val);
      },
      (err)=>{
        this.x = 0;
        console.log(err);
      },
      ()=>{
        this.x = 0;
        console.log("observable is complete!")
      }
    )
  }
}
