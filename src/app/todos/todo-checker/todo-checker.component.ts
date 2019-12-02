import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'wsd-todo-checker',
  templateUrl: './todo-checker.component.html',
  styleUrls: ['./todo-checker.component.scss']
})
export class TodoCheckerComponent implements OnInit {
  @Input() todo: Todo;
  @Output() emitToggle: EventEmitter<void> = new EventEmitter();
  @Output() emitDelete: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleChecked() {
    this.emitToggle.emit();
    // this.todo.isDone = !this.todo.isDone;
  }

  deleteTodo() {
    this.emitDelete.emit(this.todo);
  }

}
