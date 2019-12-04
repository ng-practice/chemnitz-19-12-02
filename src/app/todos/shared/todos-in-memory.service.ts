import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  private stream$$ = new BehaviorSubject<Todo[]>(this.todos);

  todos$ = this.stream$$.asObservable();
  activeFilter: string;

  query(query?: string) {
    this.activeFilter = query ? query : this.activeFilter;
    if (this.activeFilter === 'all' || !this.activeFilter) {
      this.stream$$.next(this.todos);
    } else {
      this.stream$$.next(this.todos.filter(todo =>
        todo.isDone === (this.activeFilter === 'complete' ? true : false)
      ));
    }
  }

  toggle(todo: Todo): void {
    this.todos[this.todos.indexOf(todo)].isDone = !todo.isDone;
    this.query();
  }

  add(newTodo: Todo): void {
    this.todos.push(newTodo);
    this.query();
  }

  delete(todoDelete: Todo): void {
    this.todos.splice(
      this.todos.findIndex(todo => todo.text === todoDelete.text),
      1
    );
    this.query();
  }
}
