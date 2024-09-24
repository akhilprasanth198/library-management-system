import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book-service.service';
import { Book } from '../model/book'; // Import your book model
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-book-search',
  standalone :true,
  imports : [CommonModule,FormsModule],
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  books: Book[] = [];
  bookname: string = '';


  constructor(private bookService: BookService,private authService: AuthService) { }

  ngOnInit(): void { }

  onSearch() {
    if (this.bookname.trim()) {
      this.bookService.searchBook(this.bookname).subscribe((books: Book[]) => {
        console.log("Books found: ", books);
        this.books = books;
      });
    }
  }
  borrowBook(bookId: number) {
    const userId = this.authService.getUserId(); // Get userId dynamically
    if (userId === null) {
      alert("You need to log in to borrow a book.");
      return;
    }
    this.bookService.borrowBook(bookId, userId).subscribe(response => {
      alert(response.message);  // Show confirmation message
      this.onSearch();  // Refresh book list
    }, error => {
      alert(error.error);
    });
  }

  returnBook(bookId: number) {
    const userId = this.authService.getUserId(); // Get userId dynamically
    if (userId === null) {
      alert("You need to log in to return a book.");
      return;
    }
    this.bookService.returnBook(bookId, userId).subscribe(response => {
      alert("Book borrowed successfully."); // Show confirmation message
      this.onSearch(); // Refresh book list
    }, error => {
      alert("Cant borrow");
    });
  }
}


