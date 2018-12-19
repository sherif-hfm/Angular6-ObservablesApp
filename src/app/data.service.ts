import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
dataSrv=new Subject<string>();
  constructor() { }

  AddData()
  {
    this.dataSrv.next('Data Added');
  }
}
