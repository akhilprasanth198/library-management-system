import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {
  private apiUrl = 'https://localhost:5001/api/borrow';

  constructor(private http: HttpClient) {}

  borrowBook(userId: number, bookId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/borrow`, { userId, bookId });
  }

  returnBook(userId: number, bookId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/return`, { userId, bookId });
  }

  getUserBorrows(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/user-borrows/${userId}`);
  }
}
