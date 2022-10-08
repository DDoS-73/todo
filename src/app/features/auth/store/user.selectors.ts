import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Features } from '../../../store/features';
import { User } from "../../../core/models/user.model";

export const selectUser = createFeatureSelector<User>(Features.User);

export const selectUserID = createSelector(
  selectUser,
  (state: User) => state.id
)
