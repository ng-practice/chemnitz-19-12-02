import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'wsd-todo-quick-add',
  templateUrl: './todo-quick-add.component.html',
  styleUrls: ['./todo-quick-add.component.scss']
})
export class TodoQuickAddComponent {

  @Output() create: EventEmitter<string> = new EventEmitter();

  addFormGroup: FormGroup = new FormGroup({
    text: new FormControl('', [Validators.required])
  });

  emitCreate() {
    if (this.addFormGroup.invalid) { return; }
    this.create.emit(
      this.addFormGroup.value.text
    );
    this.addFormGroup.reset();
  }

}
