import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NavbarComponent } from "../../navbar/navbar.component";
import { AuthService } from '../../services/auth.service';
AuthService
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink,RouterOutlet, FormsModule, CommonModule, NavbarComponent],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  userobject:any ={
    username:"",
    password:""
  }
  userService =inject(UserService);
  authService = inject(AuthService);
  router = inject(Router);
  doLogin()
  {
    this.userService.onLoginSubmit(this.userobject).subscribe((result:any) =>
    {
      console.log(result);
      // If login is successful
      if (result && result.message === 'Login successful') {
        // Set the userId in AuthService
        this.authService.setUserId(result.userId);  // Assuming result contains userId
        this.router.navigateByUrl('/userNav/book-search');
      }
      
    },
    (error:any) =>
      {
        alert('Invalid username and password');
        console.log(error);
    });
}
}
