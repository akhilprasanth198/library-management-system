import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book-service.service';
import { Book } from '../model/book'; // Import your book model
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private bookService: BookService) { }

  ngOnInit(): void { }

  onSearch() {
    if (this.bookname.trim()) {
      this.bookService.searchBook(this.bookname).subscribe((books: Book[]) => {
        console.log("Books found: ", books);
        this.books = books;
      });
    }
  }
  
  // onSearch() {
  //   if (this.bookname.trim()) {
  //     this.bookService.searchBook(this.bookname).subscribe((books: Book[]) => {
  //       this.books = books;
  //     });
  //   }
  // }

  borrowBook(bookId: number) {
    const userId = 1; // Get this dynamically from logged-in user
    this.bookService.borrowBook(bookId, userId).subscribe(response => {
      alert(response.message);  // Show confirmation message
      this.onSearch();  // Refresh book list
    }, error => {
      alert(error.error);
    });
  }
}

