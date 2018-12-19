import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { of, pipe } from 'rxjs';
import { filter, map, } from 'rxjs/operators';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  
  
  constructor(private dataSrv: DataService) { }

  ngOnInit() {
    // this.dataSrv.dataSrv.subscribe((data)=>{
    //   console.log(data);
    // });
    this.dataSrv.dataSrv.pipe(map((data) => {return data +" maped"})).subscribe((data)=>{
      console.log(data);
    });
  }

  onclick()
  {
    this.dataSrv.AddData();
  }
  onMapclick()
  {
    const nums = of(1, 2, 3, 4, 5);
 
// Create a function that accepts an Observable.
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );
    
    // Create an Observable that will run the filter and map functions
    const squareOdd = squareOddVals(nums);
    
    // Suscribe to run the combined functions
    squareOdd.subscribe(x => console.log(x));
  }
}
