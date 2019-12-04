import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOption } from '../models/select-option';

@Component({
  selector: 'wsd-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent<T> implements ControlValueAccessor {
  @Input() options: SelectOption<T>[];
  public value: T;

  onChanged: any = () => { };
  onTouched: any = () => { };

  setValue(value: T) {
    console.log(value);
    this.value = value;
    this.onChanged(value);
  }

  writeValue(val) {
    this.value = val;
  }

  registerOnChange(fn: any) {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

}
