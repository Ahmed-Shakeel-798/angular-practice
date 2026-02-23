import { Component, input } from '@angular/core';
import { Todo } from '../../model/todo.type';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  todo_item = input.required<Todo>();
}