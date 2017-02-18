import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import   { StudentComponent }  from './Student.component';
import { StudentService } from './Student.service';
import { StudentDetailComponent } from './Student-Detail.component';
import { HttpModule }    from '@angular/http';
import { Http} from '@angular/http';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouterModule }   from '@angular/router';




@NgModule({
  imports: [ BrowserModule,FormsModule,HttpModule,RouterModule.forRoot([
  {
    path: 'heroes',
    component: StudentComponent
  }
]) ],
  declarations: [ AppComponent,StudentComponent,StudentDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers:[StudentService]
})
export class AppModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/