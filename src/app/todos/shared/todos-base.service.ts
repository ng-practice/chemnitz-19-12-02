import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

export abstract class TodosBaseService {

  abstract query(
    query?: string
  ): Observable<Todo[]>;

  abstract add(newTodo: Todo): Observable<Todo[]>;

  abstract toggle(todo: Todo): Observable<Todo[]>;

  abstract delete(todo: Todo): Observable<Todo[]>;
}
