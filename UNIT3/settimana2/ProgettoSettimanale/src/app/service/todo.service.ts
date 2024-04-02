import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Todos } from '../models/todos.interface';


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosSubject = new BehaviorSubject<Todos[]>([]);
  todos: Todos[] = [];
  

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>('assets/todos.json');
  }
  updateTask(id: number, data: Partial<Todos>) {
    this.todos = this.todos.map((todo) =>
      todo.id ? { ...todo, ...data } : todo
    );
  }
  toggleCompletion(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.todosSubject.next([...this.todos]); 
    }
  }
}
