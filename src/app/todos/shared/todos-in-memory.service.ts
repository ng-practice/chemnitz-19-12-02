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

  query(query: string = 'all'): Observable<Todo[]> {
    if (query === 'all' || !query) {
      return of(this.todos);
    }
    return of(this.todos.filter(todo =>
      todo.isDone === (query === 'complete' ? true : false)
    ));
  }

  toggle(todo: Todo): Observable<Todo[]> {
    this.todos[this.todos.indexOf(todo)].isDone = !todo.isDone;
    return of(this.todos);
  }

  add(newTodo: Todo): Observable<Todo[]> {
    this.todos.push(newTodo);
    return of(this.todos);
  }

  delete(todoDelete: Todo): Observable<Todo[]> {
    this.todos.splice(
      this.todos.findIndex(todo => todo.text === todoDelete.text),
      1
    );
    return of(this.todos);
  }
}
