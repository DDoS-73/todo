import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';

import { AuthService } from '../../../core/services/auth/auth.service';

import { RegistrationPageAction } from './user.actions';

@Injectable()
export class UserEffects {
  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegistrationPageAction.registrationUser),
      exhaustMap((action) =>
        this.authService.register(action.user).pipe(
          map((user) => {
            this.router.navigate(['/', 'todos']);
            return RegistrationPageAction.registrationUserSuccess({user});
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
