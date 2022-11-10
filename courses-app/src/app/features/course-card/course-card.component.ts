import { Component, OnInit, Input } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

type Card = {
  id: string,
  title: string,
  description: string,
  creationDate: string,
  duration: number,
  authors: string[]
}

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() card: Card | undefined
  @Input() editable = false
  penIcon = faPen
  trashIcon = faTrash

  constructor() { }

  ngOnInit(): void {
  }

}
