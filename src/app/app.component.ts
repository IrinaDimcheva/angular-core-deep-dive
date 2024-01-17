import { Component, ElementRef, ViewChild } from '@angular/core';
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

  // @ViewChild(CourseCardComponent) card: CourseCardComponent;
  @ViewChild('cardRef1', { read: ElementRef }) card: ElementRef;
  @ViewChild('cardRef1') card1: CourseCardComponent;
  @ViewChild('cardRef2') card2: CourseCardComponent;
  @ViewChild('container') containerDiv: ElementRef;

  selectCourse(course: Course) {
    // console.log('Card1', this.card1);
    // console.log('Card2', this.card2);
    console.log('ContainerDiv', this.containerDiv);
    console.log(this.card);
  }

  trackCourse(index: number, course: Course) {
    return course.id; // unique identifier
  }
}
