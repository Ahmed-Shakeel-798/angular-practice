import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos';
import { Todo } from '../../model/todo.type';
import { map } from 'rxjs/operators';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todos',
  imports: [TodoItem],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class TodosComponent implements OnInit {
  todosService: TodosService = inject(TodosService);
  todoItems = signal<Array<Todo>>([])

  ngOnInit(): void {  
    this.todosService.getTodosFromApi()
      .pipe(
        map((todos: Todo[]) => todos.slice(0, 10))
      )
      .subscribe(
        (todos: Todo[]) => {
          this.todoItems.set(todos);
        }
      )
  }

  updateTodoItem(todo_item: Todo) {
    this.todoItems.update((todos: Todo[]) => {
      return todos.map(todo => {
        if(todo.id == todo_item.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      });
    })
  }
}
