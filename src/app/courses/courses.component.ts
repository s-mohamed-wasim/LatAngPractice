import { Component, inject } from '@angular/core';
import { CourseCardComponent } from '../course-card/course-card.component';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  courses : any[] = [];

  courseService : CourseService = inject(CourseService);

  constructor(){
    this.courseService.GetCourses().subscribe(courseData => {
      this.courses = courseData;
    }, err => {
      console.log(err);
    })
  }
}
