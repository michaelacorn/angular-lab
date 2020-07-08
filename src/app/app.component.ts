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
  todo: object[];
  todoTitle: string; 
  completed: boolean = true;


  // constructor () {}

  ngOnInit() {
    this.todoTitle = '';
    this.todo = [
      {
       'id': 1, 
       'item': 'Fold Clothes',
       'completed': true,
      },
      {
        'id': 1, 
        'item': 'Put clothes in Dresser',
        'completed': false,
       },
       {
        'id': 1, 
        'item': 'Relax',
        'completed': false,
       },
       {
        'id': 1, 
        'item': 'Try To Pet Cat',
        'completed': false,
       },
       {
        'id': 1, 
        'item': 'Pet Dog',
        'completed': true,
       },
       {
        'id': 1, 
        'item': 'Be Awesome',
        'completed': true,
       },
      ]
  }

}

