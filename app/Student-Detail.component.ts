import { Component, Input } from '@angular/core';
import { Student } from './Student';

@Component({
  selector: 'my-student-detail',
  template:`<div>
<div *ngIf="student">
      <h2>{{student.StudentFName}} details!</h2>
      <div><label>id: </label>{{student.StudentID}}</div>
      <div>
        <label>name: </label>
          <input type="text"  [(ngModel)]="student.StudentFName"/>
          <input type="text"  [(ngModel)]="student.StudentLName"/>
          <input [(ngModel)]="student.StudentFeesStatus" placeholder="name"/>
       </div>
    </div>
</div>`

})

export class StudentDetailComponent {

@Input() student: Student;
title = 'detail component title';
}
