import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'Get milk',
        completed: false
      },
      {
        id: 1,
        title: 'Workout',
        completed: true
      },
      {
        id: 1,
        title: 'Sleep',
        completed: false
      }
    ]
  }

}
