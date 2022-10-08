import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { SharedModule } from "../../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { Features } from "../../store/features";
import { EffectsModule } from "@ngrx/effects";
import { todoReducer } from "./store/todo.reducer";
import { TodoEffects } from "./store/todo.effects";
import { TodoItemComponent } from './todo-item/todo-item.component';
import { FormsModule } from "@angular/forms";
import { ModalModule } from "../modal/modal.module";


@NgModule({
  declarations: [
    TodosComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(Features.TodoList, todoReducer),
    EffectsModule.forFeature([TodoEffects]),
    FormsModule,
    ModalModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
