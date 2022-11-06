import { Component, OnInit, Input } from '@angular/core';
import { mockedCourseList } from 'src/data/mockData';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  cards = [...mockedCourseList]
  @Input() editable = true

  constructor() { }

  ngOnInit(): void {
  }

}
