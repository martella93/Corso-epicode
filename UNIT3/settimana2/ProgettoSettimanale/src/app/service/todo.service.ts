import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Todos } from '../models/todos.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todos[] = [];
  private todosSubject: BehaviorSubject<Todos[]> = new BehaviorSubject<Todos[]>([]);

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>('assets/todos.json');
  }

  toggleComplete(id: number) {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      this.todos[todoIndex].completed = true;
      this.todosSubject.next(this.todos.slice()); // Invia una copia dell'array aggiornato
    }
  }

  toggleIncomplete(id: number) {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex !== -1) {
      this.todos[todoIndex].completed = false;
      this.todosSubject.next(this.todos.slice()); // Invia una copia dell'array aggiornato
    }
  }

  // Aggiungi altri metodi del servizio, se necessario
}

