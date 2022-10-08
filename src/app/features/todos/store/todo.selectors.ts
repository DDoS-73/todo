import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { Todo } from "../../../core/models/todo.model";
import { Features } from "../../../store/features";

export const selectTodos = createFeatureSelector<Todo[]>(Features.TodoList);

export const selectTodoByID = createSelector(
  selectTodos,
  (state:Todo[],  props: {id: number}) => state.find(el => el.id === props.id)
);

export const selectTodoTitle = createSelector(
  selectTodoByID,
  (todo) => todo?.title
)
