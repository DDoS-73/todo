import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './features/auth/registration/registration.component';
import { TodosComponent } from "./features/todos/todos/todos.component";

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'todos', component: TodosComponent },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
