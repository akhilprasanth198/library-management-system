import { Component, importProvidersFrom } from '@angular/core';
import { BookService } from '../services/book-service.service';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgFor,NgIf],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  book : any[]=[];
  constructor(private httpclient:HttpClient){}
  getBookDetails()
  {
    this.httpclient.get('https://localhost:7174/api/Books').subscribe((result:any) =>
      {
        this.book = result;
        console.log('Book Details :',this.book );
      });
      
  }
  
  // Method to delete a book by ID
  delBook(bookId: number) {
    const confirmDelete = confirm('Are you sure you want to delete this book?');
    if (confirmDelete) {
      this.httpclient.delete(`https://localhost:7174/api/Books/${bookId}`).subscribe({
        next: () => {
          console.log('Book deleted successfully');
          // Optionally refresh the book list after deletion
          this.getBookDetails();
        },
        error: (err) => {
          console.error('Error deleting book:', err);
        }
      });
    }
  }
}
