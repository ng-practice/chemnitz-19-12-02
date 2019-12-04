import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectOption } from '../../ui-components/models/select-option';

@Component({
  selector: 'wsd-todo-quick-add',
  templateUrl: './todo-quick-add.component.html',
  styleUrls: ['./todo-quick-add.component.scss']
})
export class TodoQuickAddComponent {

  @Output() create: EventEmitter<string> = new EventEmitter();

  options: SelectOption<{ firstname: string, lastname: string }>[] = [
    { label: 'Mitarbeiter 1', value: { firstname: 'Udo', lastname: 'Schneider' } },
    { label: 'Mitarbeiter 2', value: { firstname: 'Misko', lastname: 'Havery' } },
  ];

  addFormGroup: FormGroup = new FormGroup({
    text: new FormControl('', [Validators.required]),
    employee: new FormControl(null)
  });

  emitCreate() {
    if (this.addFormGroup.invalid) { return; }
    this.create.emit(
      this.addFormGroup.value.text
    );
    this.addFormGroup.reset();
  }

}
