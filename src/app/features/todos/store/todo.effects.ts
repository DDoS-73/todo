import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { TodoListActions } from "./todo.actions";
import { TodoService } from "../../../core/services/todo/todo.service";


@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoListActions.loadTodo),
      mergeMap(() =>
        this.todoService.getTodos().pipe(
          map((todos) => {
              todos = todos.slice(0, 5);
              return TodoListActions.loadTodoSuccess({todos})
            }
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoListActions.updateTodo),
      mergeMap((action) =>
        this.todoService.updateTodo(action.todo).pipe(
          map((todo) => {
              return TodoListActions.updateTodoSuccess({todo})
            }
          ),
          catchError(async () => TodoListActions.updateTodoSuccess({todo: action.todo}))
        )
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoListActions.addTodo),
      mergeMap((action) =>
        this.todoService.addTodo(action.todo).pipe(
          map((todo) => {
              return TodoListActions.addTodoSuccess({todo})
            }
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoListActions.deleteTodo),
      mergeMap((action) =>
        this.todoService.deleteTodo(action.id).pipe(
          map(() => {
              return TodoListActions.deleteTodoSuccess({id: action.id})
            }
          ),
          catchError(async () => TodoListActions.deleteTodoSuccess({id: action.id}))
        )
      )
    )
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private todoService: TodoService,
  ) {
  }
}
