import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input({ required: true }) course: Course;
  @Input({ required: true }) index: number;
  @Input() cardIndex: number;
  @Output() courseSelected = new EventEmitter<Course>();
  // @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  viewCourse() {
    console.log('card component - button clicked...');
    this.courseSelected.emit(this.course);
    // this.courseEmitter.emit(this.course);
  }
}
