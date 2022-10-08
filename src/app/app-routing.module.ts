import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './features/auth/registration/registration.component';
import { TodosComponent } from "./features/todos/todos/todos.component";

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'todos', component: TodosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
