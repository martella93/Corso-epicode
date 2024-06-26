import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todos.interface';
import { TodoService } from 'src/app/service/todo.service';
import { UsersService } from 'src/app/service/users.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  todos: Todos[] = [];
  users: User[] = [];

  todosSubscription!: Subscription;
  usersSubscription!: Subscription;

  constructor(
    private todoService: TodoService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.todosSubscription = this.todoService.getTodos().subscribe(
      (data: Todos[]) => {
        this.todos = data;
      },
      (error) => {
        console.error(error);
      }
    );

    this.usersSubscription = this.userService.getUser().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  ngOnDestroy(): void {
    this.todosSubscription.unsubscribe();
    this.usersSubscription.unsubscribe();
  }

  toggleToDoCompletion(todo: Todos): void {
    todo.completed = !todo.completed;
  }

  getUserFirstName(userId: number): string {
    const user = this.users.find((u) => u.id === userId);
    return user ? user.firstName : '';
  }
}
