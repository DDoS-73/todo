import {
  createActionGroup,
  props,
} from '@ngrx/store';

import { User } from '../../../core/models/user.model';



export const RegistrationPageAction = createActionGroup({
  source: 'Registration Page',
  events: {
    'Registration User': props<{ user: User }>(),
    'Registration User Success': props<{ user: User }>(),
  },
});

