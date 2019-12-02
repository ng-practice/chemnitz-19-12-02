import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wsd-todo-quick-add',
  templateUrl: './todo-quick-add.component.html',
  styleUrls: ['./todo-quick-add.component.scss']
})
export class TodoQuickAddComponent implements OnInit {

  @Output() create: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitCreate(input: HTMLInputElement) {
    this.create.emit(input.value)
    input.value = '';
  }

}
