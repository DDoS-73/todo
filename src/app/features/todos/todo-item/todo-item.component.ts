import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from "../../../core/models/todo.model";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css', './checkbox.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent implements OnInit {
  constructor() { }

  @Input() todo!: Todo
  @Output() changeTodoStatus = new EventEmitter();
  @Output() deleteClick = new EventEmitter();
  @Output() editClick = new EventEmitter();

  ngOnInit(): void {
  }

  changeStatus() {
    this.changeTodoStatus.emit({...this.todo, completed: !this.todo.completed});
  }

  deleteTodo() {
    this.deleteClick.emit(this.todo.id);
  }

  editTodo() {
    this.editClick.emit(this.todo.id);
  }
}
