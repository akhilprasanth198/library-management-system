import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SearchComponent } from "../search/search.component";
import { UserSearchComponent } from "../user-search/user-search.component";
import { AddbookComponent } from '../addbook/addbook.component';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavbarComponent, SearchComponent, UserSearchComponent,AddbookComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
