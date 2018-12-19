import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntervalComponent } from './interval/interval.component';
import { HomeComponent } from './home/home.component';
import { CustomObsComponent } from './custom-obs/custom-obs.component';
import { SubjectComponent } from './subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    IntervalComponent,
    HomeComponent,
    CustomObsComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
