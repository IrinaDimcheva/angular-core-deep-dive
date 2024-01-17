import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  courses = COURSES;
  // courses = [];

  title = COURSES[0].description;
  price = 9.99;
  rate = 0.67;
  startDate = new Date(2000, 0, 1);
  course = COURSES[0];

  selectCourse(course: Course) {
    console.log('App component - click event bubbled', course);
  }

  trackCourse(index: number, course: Course) {
    return course.id; // unique identifier
  }
}
