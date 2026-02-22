import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos';
import { Todo } from '../../model/todo.type';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  imports: [],
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
}
