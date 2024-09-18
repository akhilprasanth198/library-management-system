import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  userobject:any ={
    username:"",
    password:""
  }
  userService =inject(UserService)
  router = inject(Router);
  doLogin()
  {
    this.userService.onLoginSubmit(this.userobject).subscribe((result:any) =>
    {
      console.log(result);
      if(result && result.message=='Login Sucess'){
        this.router.navigateByUrl('home');
      }
      
    },
    (error:any) =>
      {
        alert('Invalid username and password');
        console.log(error);
    });
}
}
