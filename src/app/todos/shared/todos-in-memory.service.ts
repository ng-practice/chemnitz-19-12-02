import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo';
import { TodosBaseService } from './todos-base.service';

@Injectable(
  // {providedIn: 'root'}
)
export class TodosInMemoryService
  extends TodosBaseService {
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

  query(): Observable<Todo[]> {
    return of(this.todos);
  }

  // toggle(index: number): void {
  //   this.todos[index].isDone = !this.todos[index].isDone;
  // }

  add(newTodo: Todo): Observable<Todo[]> {
    this.todos.push(newTodo);
    return of(this.todos);
  }

  // delete(todoDelete: Todo): void {
  //   this.todos.splice(
  //     this.todos.findIndex(todo => todo.text === todoDelete.text),
  //     1
  //   );
  //   // this.todos.filter(todo =>  todoDelete.text !== todoDelete.text);
  // }
}
