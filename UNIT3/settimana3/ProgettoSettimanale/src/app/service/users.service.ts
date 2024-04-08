import { Injectable } from '@angular/core';
import { Users } from '../models/users.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  apiURL = environment.apiURL;
  user!: Users[];

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<Users[]>(`${this.apiURL}users`);
  }

  getCurrentUser(): Users | null {
    
    const currentUserId = 1; 
    return this.user.find((user) => user.id === currentUserId) || null;
  }
  
}
