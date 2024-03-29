import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { TodoService } from 'src/app/service/todo.service';
import { UsersService } from 'src/app/service/users.service';
import { Subscription } from 'rxjs';
import { Todos } from 'src/app/models/todos.interface';

@Component({
  selector: 'app-by-user',
  templateUrl: './by-user.component.html',
  styleUrls: ['./by-user.component.scss'],
})
export class ByUserComponent implements OnInit, OnDestroy {
  users: User[] = [];
  todo: Todos[] = [];
  subscriptionTodo!: Subscription;
  subscriptionUser!: Subscription;
  combinedArray: { todo: Todos; user: User }[] = [];

  constructor(private todoService: TodoService, private userService: UsersService) {}

  ngOnInit(): void {
    this.subscriptionTodo = this.todoService.getTodos().subscribe(
      (data: Todos[]) => {
        this.todo = data;
        this.combineArrays();
      },
      (error) => {
        console.error(error);
      }
    );

    this.subscriptionUser = this.userService.getUser().subscribe(
      (data: User[]) => {
        this.users = data;
        this.combineArrays();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptionTodo.unsubscribe();
    this.subscriptionUser.unsubscribe();
  }

  toggleToDoCompletion(todo: Todos): void {
    todo.completed = !todo.completed;
    this.saveTodos();
  }

  combineArrays(): void {
    if (this.todo.length > 0 && this.users.length > 0) {
      this.combinedArray = this.todo.map((todo, index) => ({
        todo,
        user: this.users[index],
      }));
    }
  }

  saveTodos(): void {
    const todosString = JSON.stringify(this.todo);
    sessionStorage.setItem('todos', todosString);
  }
}
