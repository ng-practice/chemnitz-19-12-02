import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Todo } from '../models/todo';
import { TodosBaseService } from './todos-base.service';


@Injectable(
  // {providedIn: 'root'}
)
export class TodosApiService
  extends TodosBaseService {
  private activeFilter = '';


  private triggerQuery$$ = new Subject<string>();
  private triggerAdd$$ = new Subject<Todo>();
  private triggerDelete$$ = new Subject<Todo>();
  private triggerToggle$$ = new Subject<Todo>();


  private query$ = this.triggerQuery$$.pipe(
    tap((queryToUse: string) => this.activeFilter = queryToUse ? queryToUse : this.activeFilter),
    switchMap(() => this.http.get<Todo[]>(
      `http://localhost:3000/todos?query=${this.activeFilter || 'all'}`))
  );

  private add$ = this.triggerAdd$$.pipe(
    switchMap((todo) => this.http.post<Todo>(
      `http://localhost:3000/todos`,
      todo)
      .pipe(
        tap(() => this.query())
      ))
  );

  private toggle$ = this.triggerToggle$$.pipe(
    switchMap(todo => {
      todo.isDone = !todo.isDone;
      return this.http.put<Todo>(
        `http://localhost:3000/todos/${todo.id}`,
        todo).pipe(
          tap(() => this.query())
        );
    })
  );

  private delete$ = this.triggerDelete$$.pipe(switchMap(todo => this.http.delete<Todo>(
    `http://localhost:3000/todos/${todo.id}`).pipe(
      tap(() => this.query())
    )));

  todos$: Observable<Todo[]> = this.query$;


  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    super();
  }

  query(query?: string) {
    this.triggerQuery$$.next(query);
  }

  add(newTodo: Todo): void {
    this.triggerAdd$$.next(newTodo);
  }

  toggle(todo: Todo): void {
    this.triggerToggle$$.next(todo);
  }

  delete(todo: Todo): void {
    this.triggerDelete$$.next(todo);
  }

}
