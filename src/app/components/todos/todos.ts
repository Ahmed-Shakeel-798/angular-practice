import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos';
import { Todo } from '../../model/todo.type';

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
    this.todoItems.set(this.todosService.todoItems);
  }
}
