import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "./features/auth/auth.module";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from "../environments/environment";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TodosModule } from "./features/todos/todos.module";
import { ModalModule } from "./features/modal/modal.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    AuthModule,
    TodosModule,
    ModalModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
