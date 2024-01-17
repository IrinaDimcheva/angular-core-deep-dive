import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;
  // courses = [];

  @ViewChild('cardRef1', { read: ElementRef }) card1: ElementRef;
  @ViewChild('courseImage') courseImage: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    // console.log('courseImage', this.courseImage); - undefined | not part of this component
    // console.log('ContainerDiv', this.card1);
    // Throws an error
    // this.courses[0].description = 'test';
  }

  selectCourse(course: Course) {
    // console.log('ContainerDiv', this.containerDiv);
    // console.log('ContainerDiv', this.card1);
  }

  trackCourse(index: number, course: Course) {
    return course.id; // unique identifier
  }
}
