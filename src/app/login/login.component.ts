import { Component } from '@angular/core';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { SearchComponent } from "../search/search.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavlogComponent } from "../navlog/navlog.component";
import { NavbarComponent } from "../navbar/navbar.component";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [UserRegistrationComponent, UserLoginComponent, AdminLoginComponent, AdminRegistrationComponent, SearchComponent, RouterLink, RouterOutlet, NavlogComponent, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
