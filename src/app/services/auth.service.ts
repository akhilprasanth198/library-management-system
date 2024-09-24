import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userId: number | null = null; // Store user ID here
  private userDetails: any = null;  // Store the logged-in user details here

  constructor(private http:HttpClient) {}
  

  // Simulate user login
  login(userId: number,userDetails:any): void {
    this.userId = userId; // Store the logged-in user ID
    this.userDetails = userDetails // Store the logged-in user details
  }
  setUserId(id: number): void {
    this.userId = id; // Store the logged-in user ID
  }
  // Get the logged-in user ID
  getUserId(): number | null {
    return this.userId;
  }
  
  // Get the logged-in user details
  getUserDetails(): any {
  return this.userDetails;
  }
   // Simulate user logout
  logout(): void {
    this.userId = null;
    this.userDetails = null;
  }
  isAuthenticated(): boolean {
    return this.userId !== null; // Return true if a user ID is stored
  }
}
