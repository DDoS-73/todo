import { createReducer, on } from '@ngrx/store';

import { User } from '../../../core/models/user.model';
import {  RegistrationPageAction } from './user.actions';


const initialState: User = {
  address: {
    city: "",
    street: "",
    suite: "",
    zipcode: ""
  },
  email: "",
  name: "",
  phone: "",
  username: "",
  id: 0
};

export const userReducer = createReducer(
  initialState,
  on(RegistrationPageAction.registrationUserSuccess, (state, { user }) => ({
    ...user
  }))
);
