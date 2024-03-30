import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todos } from 'src/app/models/todos.interface';
import { TodoService } from 'src/app/service/todo.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/service/users.service';
@Component({
  selector: 'app-not-completed',
  templateUrl: './not-completed.component.html',
  styleUrls: ['./not-completed.component.scss'],
})
export class NotCompletedComponent implements OnInit, OnDestroy {
  notCompletedtodos: Todos[] = [];
  users: User[] = [];
  todosSubscription!: Subscription;
  usersSubscription!: Subscription;


  constructor(private todoService: TodoService, private userService: UsersService) {}

  ngOnInit(): void {
    this.todosSubscription = this.todoService.getTodos().subscribe(
      (data: Todos[]) => {
        this.notCompletedtodos = data.filter((todo) => !todo.completed);
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

  getUserFirstName(userId: number): string {
    const user = this.users.find((u) => u.id === userId);
    return user ? user.firstName : '';
  }

  taskNotCompleted(id: number, index: number) {
    this.todoService.updateTask(id, { completed: false });
    this.notCompletedtodos.splice(index, 1);
  }
}
