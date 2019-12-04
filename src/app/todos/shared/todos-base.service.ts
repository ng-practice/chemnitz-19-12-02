import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

export abstract class TodosBaseService {

  abstract todos$: Observable<Todo[]>;

  abstract query(
    query?: string
  ): void;

  abstract add(newTodo: Todo): void;

  abstract toggle(todo: Todo): void;

  abstract delete(todo: Todo): void;
}
