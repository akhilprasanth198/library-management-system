import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SearchComponent } from "../search/search.component";
import { UserSearchComponent } from "../user-search/user-search.component";
import { AddbookComponent } from '../addbook/addbook.component';
import { NavlogComponent } from '../navlog/navlog.component';
import { DelBookComponent } from "../delbook/delbook.component";
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [NavlogComponent, SearchComponent, UserSearchComponent, AddbookComponent,  DelBookComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
