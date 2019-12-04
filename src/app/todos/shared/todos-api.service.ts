import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Todo } from '../models/todo';
import { TodosBaseService } from './todos-base.service';


@Injectable(
  // {providedIn: 'root'}
)
export class TodosApiService
  extends TodosBaseService {
  private activeFilter = '';

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    super();
  }

  query(query?: string): Observable<Todo[]> {
    this.activeFilter = query ? query : this.activeFilter;
    return this.http.get<Todo[]>(
      `http://localhost:3000/todos?query=${this.activeFilter || 'all'}`);
  }

  add(newTodo: Todo): Observable<Todo[]> {
    return this.http.post<Todo>(
      `http://localhost:3000/todos`,
      newTodo)
      .pipe(
        switchMap(() => this.query())
      );
  }

  toggle(todo: Todo) {
    todo.isDone = !todo.isDone;
    return this.http.put<Todo>(
      `http://localhost:3000/todos/${todo.id}`,
      todo).pipe(
        switchMap(() => this.query())
      );
  }

  delete(todo: Todo) {
    todo.isDone = !todo.isDone;
    return this.http.delete<Todo>(
      `http://localhost:3000/todos/${todo.id}`).pipe(
        switchMap(() => this.query())
      );
  }

}
