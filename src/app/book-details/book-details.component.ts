import { Component, importProvidersFrom, inject } from '@angular/core';
import { BookService } from '../services/book-service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Book } from '../model/book';
import { FormsModule } from '@angular/forms';
@Component({
        selector: 'app-book-details',
        standalone: true,
        imports: [RouterOutlet,RouterLink,NgFor,NgIf,FormsModule],
        templateUrl: './book-details.component.html',
        styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
books: Book[] = [];
bookname: string = '';
constructor(private booksService: BookService) { }
router = inject(Router);
ngOnInit(): void { }
onSearch() {
  if (this.bookname.trim()) {
      this.booksService.searchBook(this.bookname).subscribe((books: Book[]) => {
      this.books = books;
      });
    }
}
// Method to delete a book by ID
deleteBook(bookId: number): void {
      const confirmDelete = confirm('Are you sure you want to delete this book?');
      if (confirmDelete) {
        this.booksService.delbook(bookId).subscribe(
          (response: { message: string }) => {
            alert(response.message); // Show confirmation message
            this.onSearch(); // Refresh book list
            this.router.navigateByUrl('/books');
          },
          (error: HttpErrorResponse) => {
            alert('Error deleting book: ' + error.message);
        });
      }
    }
}
