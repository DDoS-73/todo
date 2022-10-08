import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Todo } from "../../../core/models/todo.model";


export const TodoListActions = createActionGroup({
  source: 'Todo List',
  events: {
    'Load todo': emptyProps(),
    'Load todo Success': props<{todos: Todo[]}>(),
    'Update todo': props<{todo: Todo}>(),
    'Update todo Success': props<{todo: Todo}>(),
    'Add todo': props<{todo: Todo}>(),
    'Add todo Success': props<{todo: Todo}>(),
    'Delete todo': props<{id: number}>(),
    'Delete todo Success': props<{id: number}>(),
  },
});
