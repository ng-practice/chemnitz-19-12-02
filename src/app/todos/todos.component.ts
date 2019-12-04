import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Todo } from './models/todo';
import { TodosBaseService } from './shared/todos-base.service';

@Component({
  selector: 'wsd-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;
  sink: Subscription = new Subscription();
  constructor(
    private todosService: TodosBaseService,
    private activatedRoute: ActivatedRoute
  ) { }


  index(i: any): number {
    return i + 1;
  }

  ngOnInit(): void {
    this.sink.add(this.activatedRoute.paramMap.subscribe(map => {
      this.todos$ = this.todosService.query(map.get('query'));
    }));
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
    this.todos$ = this.todosService.delete(todo);
  }

  toggle(todo: Todo) {
    this.todos$ = this.todosService.toggle(todo);
    // this.todosService.toggle(index)
  }

  // ngOnDestroy() {
  //   this.sink.unsubscribe();
  // }
}
