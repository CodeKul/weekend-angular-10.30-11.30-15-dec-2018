import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebDomain, User } from './web-domain';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(
    private http: HttpClient
  ) { }

  listUsers(page: number): Observable<Object> {
    return this.http.get(`https://reqres.in/api/users?page=${page}`)
  }

  saveUser(user: User): Observable<Object> {
    return this.http.post(
      'https://reqres.in/api/users',
      user
    )
  }
}
