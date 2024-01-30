import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
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
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
  @Input() course: Course;
  @Input() noImageTmp: TemplateRef<any>;
  @Input() cardIndex: number;

  @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<ElementRef>;

  ngAfterViewInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.images);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  viewCourse() {
    this.courseEmitter.emit(this.course);
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
