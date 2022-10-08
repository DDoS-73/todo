import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../../models/user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users', user);
  }
}
