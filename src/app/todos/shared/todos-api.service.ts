import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Todo } from '../models/todo';
import { TodosBaseService } from './todos-base.service';


@Injectable(
  // {providedIn: 'root'}
)
export class TodosApiService
  extends TodosBaseService {

  constructor(private http: HttpClient) {
    super();
  }

  query(): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      `http://localhost:3000/todos`);
  }

  add(newTodo: Todo): Observable<Todo[]> {
    return this.http.post<Todo>(
      `http://localhost:3000/todos`,
      newTodo)
      .pipe(
        switchMap(() => this.query())
      );
  }
}
