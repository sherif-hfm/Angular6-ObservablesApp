import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-custom-obs',
  templateUrl: './custom-obs.component.html',
  styleUrls: ['./custom-obs.component.css']
})
export class CustomObsComponent implements OnInit,OnDestroy {
  subscribe: Subscription;
  myobs: Observable<string>;
  
  constructor() { }

  ngOnInit() {
    this.myobs=Observable.create((observer: Observer<string>)=>{      
      setTimeout(()=>{
        observer.next('first data');        
      },2000);
      setTimeout(()=>{
        observer.next('second data');        
      },4000);
      setTimeout(()=>{
        observer.error('error data');        
      },6000);
      setTimeout(()=>{
        observer.complete();  // do not fired because error fired error       // after complete no anything else fired
      },8000);
    });

    this.subscribe=this.myobs.subscribe((data)=>{
    console.log(data);
    },(data)=>{
      console.log(data);      
    },()=>{
      console.log('complete');
    })
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

}
