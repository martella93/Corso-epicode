import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todos } from 'src/app/models/todos.interface';
import { TodoService } from 'src/app/service/todo.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit, OnDestroy {
  todos: Todos[] = [];
  subscription!: Subscription;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.subscription = this.todoService.getTodos().subscribe(
      (data: Todos[]) => {
        this.todos = data.filter(todo => todo.completed);
        
      },
      (error) => {
        console.error(error);
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleComplete(todo: Todos) {
    todo.completed = !todo.completed; 
  }
}
