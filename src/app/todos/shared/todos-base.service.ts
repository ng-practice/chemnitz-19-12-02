import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

export abstract class TodosBaseService {

  abstract query(): Observable<Todo[]>;

  abstract add(newTodo: Todo): Observable<Todo[]>;

}
