import { createReducer, on } from "@ngrx/store";
import { Todo } from "../../../core/models/todo.model";
import { TodoListActions } from "./todo.actions";

const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(TodoListActions.loadTodoSuccess, (state, {todos}) => todos),
  on(TodoListActions.updateTodoSuccess, (state, {todo}) => state.map(el => el.id === todo.id ? todo : el)),
  on(TodoListActions.addTodoSuccess, (state, {todo}) => ([todo, ...state])),
  on(TodoListActions.deleteTodoSuccess, (state, {id}) => state.filter(el => el.id !== id)),
);
