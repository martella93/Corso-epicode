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
  todos: Todos[] = [];
  searchUserTerm: string = ''; 
  filteredUsers: User[] = [];

  subscriptionTodo!: Subscription;
  subscriptionUser!: Subscription;
  combinedArray!: {
    [userId: number]: {
      user: User;
      todos: Todos[];
    };
  };

  constructor(
    private todoService: TodoService,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    this.subscriptionTodo = this.todoService.getTodos().subscribe({
      next: (data: Todos[]) => {
        this.todos = data;
        this.combineArrays();
      },
      error: (error) => {
        console.error(error);
      },
    });

    this.subscriptionUser = this.userService.getUser().subscribe({
      next: (data: User[]) => {
        this.users = data;
        this.combineArrays();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.subscriptionTodo.unsubscribe();
    this.subscriptionUser.unsubscribe();
  }

  combineArrays(): void {
    if (!this.todos.length || !this.users.length) {
      return;
    }

    this.combinedArray = {};

    this.users.forEach((user) => {
      this.combinedArray[user.id] = {
        user,
        todos: this.todos.filter((todo) => todo.userId === user.id),
      };
    });
  }
  toggleToDoCompletion(todo: Todos): void {
    todo.completed = !todo.completed;
  }
  filterUsers(): void {
    if (!this.searchUserTerm.trim()) {
      this.filteredUsers = [...this.users]; 
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.firstName.toLowerCase().includes(this.searchUserTerm.toLowerCase())
      ); 
    }
  }
  
  matchesSearch(user: User): boolean {
    if (!this.searchUserTerm.trim()) {
      return true; 
    }
    const searchTerm = this.searchUserTerm.toLowerCase();
    const fullName = (user.firstName + ' ' + user.lastName).toLowerCase();
    return fullName.includes(searchTerm);
  }
}
