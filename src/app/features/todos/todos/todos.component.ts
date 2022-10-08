import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { TodoListActions } from "../store/todo.actions";
import { selectTodos, selectTodoTitle } from "../store/todo.selectors";
import { Observable } from "rxjs";
import { Todo } from "../../../core/models/todo.model";
import { ModalService } from "../../../core/services/modal/modal.service";
import { selectUserID } from "../../auth/store/user.selectors";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor(
    private store: Store,
    private modalService: ModalService
    ) {}

  todos$: Observable<Todo[]> = this.store.select(selectTodos);
  title?: string;
  userID!: number;
  todoID!: number;
  showEditError = false;

  get isDisabled() {
    return !this.title;
  }

  ngOnInit(): void {
    this.store.dispatch(TodoListActions.loadTodo());
    this.store.select(selectUserID).subscribe((id) => this.userID = id);
  }

  trackByID(index: number, todo: Todo) {
    return todo.id;
  }

  changeTodoStatus(todo: Todo) {
    this.store.dispatch(TodoListActions.updateTodo({ todo }));
  }

  addTodo() {
    const todo: Todo = {
      title: this.title || '',
      completed: false,
      userId: this.userID
    }
    this.store.dispatch(TodoListActions.addTodo({ todo }));
  }

  deleteTodo() {
    this.store.dispatch(TodoListActions.deleteTodo({id: this.todoID}));
  }

  editTodo() {
    if(!this.title) {
      this.showEditError = true;
      return;
    }
    const todo: Todo = {
      title: this.title || '',
      completed: false,
      userId: this.userID,
      id: this.todoID
    }
    this.store.dispatch(TodoListActions.updateTodo({ todo }));
    this.closeModal('editTodoModal');
  }

  todoHandler(id: number, modalID: string) {
    this.openModal(modalID);
    this.todoID = id;
    this.store.select(selectTodoTitle, {id: this.todoID}).subscribe(title => this.title = title);
  }

  openModal(id: string) {
    this.title = '';
    this.showEditError = false;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  addBtnStyles = {
    fontSize: '14px',
    padding: '5px 14px',
  }

  deleteBtnStyles = {
    background: '#FFF',
    color: '#000',
    border: '1px solid var(--border-col)'
  }
}
