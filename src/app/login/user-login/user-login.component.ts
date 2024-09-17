import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  userobject:any ={
    username:"",
    password:"",
  }
  userService =inject(UserService)
  router = inject(Router);
  doUserLogin()
  {
    this.userService.onLoginSubmit(this.userobject).subscribe((result:any) =>
    {
      //if the api returns sucess we klet the user to the system
      //otherwise provide and alert errpr message
      console.log(result);
      if(result && result.token){
        this.router.navigateByUrl('user-dashboard');
      }
      
    },
    (error) =>
      {
        alert('Invalid username and password');
        console.log(error);
    });
}
}
