import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

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
  titleFilter: string;
  // addTask: function addTask
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
        'id': 2, 
        'item': 'Put clothes in Dresser',
        'completed': false,
        'todo': true,
       },
       {
        'id': 3, 
        'item': 'Relax',
        'completed': false,
        'todo': true,
       },
       {
        'id': 4, 
        'item': 'Try To Pet Cat',
        'completed': false,
        'todo': true,
       },
       {
        'id': 5, 
        'item': 'Pet Dog',
        'completed': true,
        'todo': false,
       },
       {
        'id': 6, 
        'item': 'Be Awesome',
        'completed': true,
        'todo': false,
       },
      ]
  }
 addTask(){
    this.todos.push({
      id: 7,
      item: this.todoTitle,
      todo: true,
      completed: false,
    })
  }
  removeTask(index){
    this.todos.splice(index,1)
  }
  completeTask(index){
    this.todos[index].completed = true
  }
}


export interface todo {
  id: number;
  item: string; 
  completed: boolean;
  todo: boolean;
}

