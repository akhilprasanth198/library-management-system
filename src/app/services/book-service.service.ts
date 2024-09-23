import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  private apiUrl = 'https://localhost:7174/api/Books/search';
  private apiUrls = 'https://localhost:7174/api/Books';
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


  onAddbook(userobj:any)
  {
    console.log(userobj);
    
    return this.http.post('https://localhost:7174/api/Books',userobj)

  }
  
  searchBook(bookname: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrls}/searches?bookname=${bookname}`);
  }

  borrowBook(bookId: number, userId: number): Observable<any> {
    return this.http.post(`${this.apiUrls}/borrow/${bookId}/${userId}`, {});
  }
  
  delbook(bookId : number): Observable<any> {
    return this.http.delete(`https://localhost:7174/api/Books/${bookId}`);
  }
}
