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
  nomeDaCercare: string | undefined;
  todosCorrispondenti: string[] = [];

  todosSubscription!: Subscription;
  usersSubscription!: Subscription;

  constructor(private todoService: TodoService, private userService: UsersService) {}

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

 
  toggleComplete(todo: Todos) {
    todo.completed = !todo.completed; 
  }

  saveTodos(): void {
    const todosString = JSON.stringify(this.todos);
    sessionStorage.setItem('todos', todosString);
  }

  ricercaTodos(): void {
    this.todosCorrispondenti = [];
    const utenteTrovato = this.users.find(
      (utente) => utente.firstName === this.nomeDaCercare
    );
    if (utenteTrovato) {
      this.todosCorrispondenti = this.todos
        .filter((todo) => todo.userId === utenteTrovato.id)
        .map((todo) => todo.todo);
    } else {
      console.log(`Nessun utente trovato con il nome ${this.nomeDaCercare}.`);
    }
  }
}
