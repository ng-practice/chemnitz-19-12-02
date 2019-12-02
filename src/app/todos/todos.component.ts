import { Component, OnInit } from '@angular/core';
import { TodosInMemoryService } from './shared/todos-in-memory.service';
import { Todo } from './models/todo';

@Component({
  selector: 'wsd-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(
    private todosService: TodosInMemoryService
    ) { }

  ngOnInit() {
    this.todos = this.todosService.getAll();
  }

  addTodo(text: string) {
    this.todosService.addTodo(text);
  }

  deleteTodo(todo: Todo) {
    this.todosService.delete(todo);
  }

  toggle(index: number) {
    this.todosService.toggle(index)
  }







}
