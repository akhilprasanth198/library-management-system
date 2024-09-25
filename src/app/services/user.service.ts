import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../model/user';
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
   // Get user details by userId
  getUserDetails(userId: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrls}/${userId}`);
  }

  // Update user details
  updateUserDetails(userId: number, userDetails: User): Observable<any> {
    return this.http.put(`${this.apiUrls}/${userId}`, userDetails);
  }
}

