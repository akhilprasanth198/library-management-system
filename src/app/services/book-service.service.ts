import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://localhost:7174/api/Books/search';

  constructor(private http: HttpClient) { }

  searchBooks(author?: string, language?: string, title?: string): Observable<Book[]> {
    let params = new HttpParams();

    if (author) {
      params = params.set('author', author);
    }

    if (language) {
      params = params.set('language', language);
    }

    if (title) {
      params = params.set('title', title);
    }

    return this.http.get<Book[]>(this.apiUrl, { params });
  }
}
