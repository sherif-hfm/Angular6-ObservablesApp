import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntervalComponent } from './interval/interval.component';
import { HomeComponent } from './home/home.component';
import { CustomObsComponent } from './custom-obs/custom-obs.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {path : '', component:HomeComponent,pathMatch: 'full'}, 
  {path : 'interval',component:IntervalComponent},
  {path : 'CustomObs',component:CustomObsComponent},
  {path : 'subject',component:SubjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
