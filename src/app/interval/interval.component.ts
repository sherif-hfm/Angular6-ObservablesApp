import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit,OnDestroy {
  
  intervalData;
  obs2: Subscription;
  constructor() { }

  ngOnInit() {
  let obs=interval(1000);
  this.obs2=obs.subscribe((num)=>{
    this.intervalData=num;
    console.log(num);
    })
  }

ngOnDestroy(){
  this.obs2.unsubscribe();
}
}
