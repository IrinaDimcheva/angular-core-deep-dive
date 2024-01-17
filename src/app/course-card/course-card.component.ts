import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent implements AfterViewInit {
  @Input({ required: true }) course: Course;
  // @Input({ required: true }) index: number;
  @Input() cardIndex: number;
  @Output() courseSelected = new EventEmitter<Course>();
  // @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

  // @ContentChild(CourseImageComponent) image: CourseImageComponent;
  @ContentChild(CourseImageComponent, { read: ElementRef })
  image: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.image);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  viewCourse() {
    this.courseSelected.emit(this.course);
    // this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    // if (this.course.category === 'BEGINNER') {
    //   // return ['beginner'];
    //   return 'beginner';
    // }
    return {
      beginner: this.course.category === 'BEGINNER',
    };
  }

  cardStyles() {
    return {
      'text-decoration': 'underline',
    };

    // return {
    //   'background-image': 'url(' + this.course.iconUrl + ')',
    // };
  }
}
