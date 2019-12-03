import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosInMemoryService {
  private todos: Todo[] = [
    {
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

  delete(todoDelete: Todo): void {
    this.todos.splice(
      this.todos.findIndex(todo => todo.text === todoDelete.text),
      1
    );
  }
}
