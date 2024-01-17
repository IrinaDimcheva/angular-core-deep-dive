import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;
  // courses = [];

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.cards);
  }

  selectCourse(course: Course) {}

  trackCourse(index: number, course: Course) {
    return course.id; // unique identifier
  }
}
