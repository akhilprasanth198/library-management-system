import { Component ,inject} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AdminService } from '../../admin.service';
@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports:[RouterOutlet,RouterLink,FormsModule,CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  adminobject:any ={
    username:"",
    password:"",
  }
  adminService = inject(AdminService)
  router = inject(Router);
  doAdminLogin()
  {
    this.adminobject.onLoginSubmit(this.adminobject).subscribe((result:any) =>
    {
      //if the api returns sucess we kept the user to the system
      //otherwise provide and alert error message
      console.log(result);
      if(result && result.token){
        this.router.navigateByUrl('admin-dashboard');
      }
      
    },
    (error: any) =>
      {
        alert('Invalid username and password');
        console.log(error);
    });
}
}
