import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Todo } from "../models/Todo";

const httpHeader = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class TodoService {
  todosUrl: string = "https://jsonplaceholder.typicode.com/todos";
  todosLimit: string = "?_limit=10";

  constructor(private http: HttpClient) {}

  // Get todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  // Update
  toogleCompleted(todo: Todo): Observable<any> {
    const url: string = `${this.todosUrl}/${todo.id}`;

    return this.http.put(url, todo, httpHeader);
  }

  todoDelete(todo: Todo): Observable<any> {
    const url: string = `${this.todosUrl}/${todo.id}`;
    return this.http.delete(url);
  }

  todoAdd(todo: Object): Observable<any> {
    return this.http.post(this.todosUrl, todo, httpHeader);
  }
}
