import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  

  constructor(private http:HttpClient ) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>('assets/user.json');
  }
}