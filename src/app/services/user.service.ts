import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrls = 'https://localhost:7174/api/Users';
  private apiUrl='https://localhost:7174/api/UserLogin';
  constructor(private http:HttpClient) { }
  //User login 
  onLoginSubmit(userobject: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, userobject);
  }
}

