import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { TodosApiService } from './shared/todos-api.service';
import { TodosBaseService } from './shared/todos-base.service';
import { TodosInMemoryService } from './shared/todos-in-memory.service';
import { TodoCheckerComponent } from './todo-checker/todo-checker.component';
import { TodoQuickAddComponent } from './todo-quick-add/todo-quick-add.component';
import { TodosLinkNavigationComponent } from './todos-link-navigation/todos-link-navigation.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [
    TodoCheckerComponent,
    TodosComponent,
    TodoQuickAddComponent,
    TodosLinkNavigationComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:
        TodosBaseService,
      useClass:
        environment.production ?
          TodosInMemoryService :
          TodosApiService
    }
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
