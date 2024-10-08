import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BookService } from '../services/book-service.service';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { SearchComponent } from "../search/search.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { NavlogComponent } from '../navlog/navlog.component';
import { UsernavComponent } from "../usernav/usernav.component";

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, NgFor, NavbarComponent, NavlogComponent, SearchComponent, UsernavComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  searchTitle: string='';
    books: any[] = [];
  
    constructor(private bookService: BookService) {}

}
