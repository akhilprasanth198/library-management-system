import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BookService } from '../book-service.service';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,NgFor],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  searchTitle: string='';
    books: any[] = [];
  
    constructor(private bookService: BookService) {}
  
    
    // searchBooks() {
    //   this.bookService.searchBooks(this.searchTitle).subscribe((data) => {
    //     this.books = data;
    //   });
    // }
}
