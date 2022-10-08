import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { StoreModule } from "@ngrx/store";
import { Features } from "../../store/features";
import { userReducer } from "./store/user.reducer";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./store/user.effects";


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(Features.User, userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  exports: [
    RegistrationComponent,
  ]
})
export class AuthModule {
}
