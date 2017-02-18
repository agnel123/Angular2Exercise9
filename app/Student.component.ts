import { Component,Directive, OnInit} from '@angular/core';
import { Student } from './Student';
import { title } from './title';
import { StudentService } from './Student.service';

@Component({
  selector: 'student-info',
  templateUrl:`app/Student.component.html`,
   styleUrls: ['app/Student.component.css']
  })

export class StudentComponent implements OnInit{

    constructor (private studentser:StudentService){}
   title = 'Hello world Student information-12';

   studentInfo: Student;
   serviceTitle:title;
   selectedStudent : Student;
errorMessage = 'error';

   //getTitlelocal():void{this.studentser.getTitle().then(serviceTitle => this.serviceTitle = serviceTitle)}
   //getStudentsLocal():void{this.studentser.getStudents().then(studentInfo => this.studentInfo = studentInfo)}

 getTitlelocal():void{this.studentser.getTitle().subscribe(serviceTitle => this.serviceTitle = serviceTitle,
    error=>this.errorMessage = <any>error);}

getStudentsLocal():void{
    
   this.studentser.getStudents().subscribe(studentInfo => this.studentInfo = studentInfo,
    error=>this.errorMessage = <any>error);
}
   ngOnInit():void{
       this.getTitlelocal();
       this.getStudentsLocal();}

  onSelect(student:Student):void {
     this.selectedStudent = student;
 }

  
}

