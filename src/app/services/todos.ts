import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoItems: Array<Todo> = [
    {
      title: "Reading",
      completed: false,
      id: 0,
      userId: 0
    },
    {
      title: "Gym",
      completed: false,
      id: 1,
      userId: 0
    }
  ]
}