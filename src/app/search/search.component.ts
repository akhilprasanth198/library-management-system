import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book-service.service';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  author = '';
  title = '';
  language = '';

  constructor(private bookService: BookService) {}

  onSearch() {
    this.bookService.searchBooks(this.author, this.title, this.language)
      .subscribe(result => {
        console.log(result); // Display search results
      });
  }
}
