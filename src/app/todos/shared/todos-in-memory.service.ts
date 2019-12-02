import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosInMemoryService {
  private todos: Todo[] = [{
    text: 'write an app',
    isDone: false
  },
  {
    text: 'buy milk',
    isDone: false
  }
  ];

  getAll() {
    return this.todos;
  }

  toggle(index: number): void {
    this.todos[index].isDone = !this.todos[index].isDone;
  }

  addTodo(text: string): void {
    this.todos.push({
      isDone: false,
      text
    });
  }

  getAllDone(): Todo[] {
    return this.todos.filter(todo => todo.isDone);
  }

  delete(todoDelete: Todo) {
    this.todos.splice(
      this.todos.indexOf(
        this.todos.find(todo =>
          todo.text === todoDelete.text
        )
      ), 1);
  }
}
