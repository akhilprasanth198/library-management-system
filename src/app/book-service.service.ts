import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://localhost:5001/api/books';

  constructor(private http: HttpClient) { }

  searchBooks(author: string, title: string, language: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?author=${author}&title=${title}&language=${language}`);
  }
}
