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
      .subscribe(
        (result: Book[]) => {
          if (result.length === 0) {
            alert('No books found');
            this.books = []; // Clear previous search results
          } else {
            this.books = result; // Display new search results
          }
        },
        (error: any) => {
          alert('An error occurred while searching for books.');
          console.log(error);
          this.books = []; // Clear previous search results on error
        }
      );
  }
  
  
  


}

//   search(): void {
//     this.bookService.searchBooks(this.author, this.language, this.title)
//       .subscribe(
//         (result: Book[]) => {
//           if (result.length === 0) {
//             // Alert if no books are found
//             alert('No books found');
//           } else {
//             this.books = result;
//           }
//         },
//         (error: any) => {
//           // Alert for any other errors (e.g., network issues)
//           alert('No books are found');
//           console.log(error);
//         }
//       );
//   }
// }

//   search(): void {
//     this.bookService.searchBooks(this.author, this.language, this.title)
//       .subscribe((result: Book[]) => {
//         this.books = result;

//         (error:any) => {
//           // Display the error message as an alert
//           alert( 'No books found');
//           console.log(error);
//         }
//       });
//   }
// }
