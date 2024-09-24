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
    localStorage.setItem('userId', id.toString());  // Optional: store in localStorage
  }

  // Get the user ID (either from memory or localStorage)
  getUserId(): number | null {
    if (this.userId !== null) {
      return this.userId;
    }

    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      this.userId = parseInt(storedUserId, 10);
      return this.userId;
    }

    return null;
  }

  // Clear user session (e.g., during logout)
  clearUser() {
    this.userId = null;
    localStorage.removeItem('userId');
  }
}
