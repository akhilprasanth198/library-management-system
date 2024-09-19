import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserSearchService {
  private apiUrl = 'https://localhost:7174/api/Users/search';

  constructor(private http: HttpClient) { }

  searchUsers(uid?: number, name?: string, email?: string): Observable<User[]> {
    let params = new HttpParams();

    if (uid) {
      params = params.set('uid', uid);
    }

    if (name) {
      params = params.set('name', name);
    }

    if (email) {
      params = params.set('email', email);
    }

    return this.http.get<User[]>(this.apiUrl, { params });
  }
}
