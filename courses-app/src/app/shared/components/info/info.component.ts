import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() title = 'Your List is Empty'
  @Input() text = 'Please use ’Add New Course’ button to add your first course'
  
  constructor() { }

  ngOnInit(): void {
  }

}
