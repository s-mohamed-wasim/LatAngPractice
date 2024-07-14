import { Component, inject } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses : any[] = [];

  courseService : CourseService = inject(CourseService);

  constructor(){
    this.courseService.GetCourses().subscribe(courseData => {
      this.courses = courseData;
      //this.courses = [];
    }, err => {
      console.log(err);
    })
  }
}
