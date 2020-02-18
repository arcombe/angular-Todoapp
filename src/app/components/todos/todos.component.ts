import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";
import { Title } from "@angular/platform-browser";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(item => item.id != todo.id);
    this.todoService.todoDelete(todo).subscribe();
  }

  addTodo(todo: any) {
    this.todoService.todoAdd(todo).subscribe(t => this.todos.push(t));
  }
}
