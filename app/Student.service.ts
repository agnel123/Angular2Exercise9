import { Injectable } from '@angular/core';
import { Student } from './Student';
import { title } from './title';
import { STUDENTS } from './mock-students';
import { serviceTitle} from './mock-students';
import { Observable } from 'rxjs/Observable';
import { Http, Response,HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



@Injectable()
export class StudentService {

private _studetnURL = 'http://demo7985132.mockable.io/agnel';
private _httpnURL = 'http://demo5474290.mockable.io/httpdata'
constructor(private _http:Http){}

//      getStudents():Promise<Student[]> {
                
//                    return Promise.resolve(STUDENTS);
//   }


getStudents():Observable<Student> {
      
       return this._http.get(this._studetnURL).map((response:Response)=><Student>response.json())
       .do(data=>console.log('All:'+JSON.stringify(data))).catch(this.handleError);
 }

  private handleError(error:Response){
     console.error(error);
     return Observable.throw(error.json().error || 'Server Error');
 }

//  getTitle():Promise<string> {
                
//                    return Promise.resolve(serviceTitle);
//   }

  getTitle():Observable<title> {
                
                   return this._http.get(this._httpnURL).map((response:Response)=><title>response.json())
       .do(data=>console.log('All:'+JSON.stringify(data))).catch(this.handleError);
  }

}