import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';
import { TodosBaseService } from './shared/todos-base.service';

@Component({
  selector: 'wsd-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;
  // sink: Subscription = new Subscription();
  constructor(
    private todosService: TodosBaseService
  ) { }

  index(i: any): number {
    return i + 1;
  }

  ngOnInit(): void {
    this.todos$ = this.todosService.query();
    // this.sink.add(this.todosService.query()
    //   .subscribe(todosFromApi => this.todos = todosFromApi));
  }

  addTodo(text: string): void {
    const todo: Todo = { text, isDone: false };
    this.todos$ = this.todosService.add(todo);
    // const todo: Todo = { text, isDone: false };
    // this.sink.add(this.todosService.add(todo).subscribe(newTodos => {
    //   this.todos = newTodos;
    // }));
  }

  deleteTodo(todo: Todo) {
    // this.todosService.delete(todo);
  }

  toggle(index: number) {
    // this.todosService.toggle(index)
  }

  // ngOnDestroy() {
  //   this.sink.unsubscribe();
  // }
}
