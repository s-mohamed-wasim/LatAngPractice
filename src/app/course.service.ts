import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  availableCourses : any[] = [
    {id:1,courseName:'Angular',coursePrize:6000},
    {id:1,courseName:'Vue',coursePrize:2000},
    {id:1,courseName:'React',coursePrize:5000},
  ]

  constructor() { }

  GetCourses() : Observable<any[]>
  {
    return of(this.availableCourses); //returns as observable.
  }
}
