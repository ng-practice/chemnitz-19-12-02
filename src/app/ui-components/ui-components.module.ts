import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [SelectComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SelectComponent]
})
export class UiComponentsModule { }
