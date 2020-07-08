import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do'
  // toDoEntry = ' '
  todos: todo[];
  todoTitle: string; 
  // todo.completed: boolean = true;


  // constructor () {}

  ngOnInit() {
    this.todoTitle = '';
    this.todos = [
      {
       'id': 1, 
       'item': 'Fold Clothes',
       'completed': true,
       'todo': false,
      },
      {
        'id': 1, 
        'item': 'Put clothes in Dresser',
        'completed': false,
        'todo': true,
       },
       {
        'id': 1, 
        'item': 'Relax',
        'completed': false,
        'todo': true,
       },
       {
        'id': 1, 
        'item': 'Try To Pet Cat',
        'completed': false,
        'todo': true,
       },
       {
        'id': 1, 
        'item': 'Pet Dog',
        'completed': true,
        'todo': false,
       },
       {
        'id': 1, 
        'item': 'Be Awesome',
        'completed': true,
        'todo': false,
       },
      ]
  }

}

interface todo {
  id: number;
  item: string; 
  completed: boolean;
  todo: boolean
}

