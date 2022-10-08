import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Todo } from "../../models/todo.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`https://jsonplaceholder.typicode.com/todos`, todo);
  }

  deleteTodo(id: number): Observable<{}> {
    return this.http.delete<{}>(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }
}
