import { Component ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book-service.service';
import { CommonModule, NgFor } from '@angular/common';
import { Book } from '../model/book';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,NgFor,CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  books: Book[] = [];
  author: string = '';
  language: string = '';
  title: string = '';

  constructor(private bookService: BookService) { }

  ngOnInit(): void { }

  search(): void {
    this.bookService.searchBooks(this.author, this.language, this.title)
      .subscribe((result: Book[]) => {
        this.books = result;
      });
  }
}
