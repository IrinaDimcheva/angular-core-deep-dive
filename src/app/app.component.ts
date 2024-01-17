import { Component, ViewChild } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses = COURSES;
  // courses = [];

  @ViewChild(CourseCardComponent) card: CourseCardComponent;

  selectCourse(course: Course) {
    console.log(this.card);
  }

  trackCourse(index: number, course: Course) {
    return course.id; // unique identifier
  }
}
