import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: number | null = null;

  constructor() {}

  // Set the user ID after successful login
  setUserId(id: number) {
    this.userId = id;
  }

  // Get the user ID 
  getUserId(): number | null {
    return this.userId;
  }

  // Clear user session (e.g., during logout)
  clearUser() {
    this.userId = null;
  }
}
