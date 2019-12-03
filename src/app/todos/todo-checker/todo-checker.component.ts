import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'wsd-todo-checker',
  templateUrl: './todo-checker.component.html',
  styleUrls: ['./todo-checker.component.scss']
})
export class TodoCheckerComponent {
  @Input() todo: Todo;
  @Output() emitToggle: EventEmitter<void> = new EventEmitter();
  @Output() emitDelete: EventEmitter<Todo> = new EventEmitter();

  toggleChecked() {
    this.emitToggle.emit();
  }

  deleteTodo() {
    this.emitDelete.emit(this.todo);
  }

}
