import { Component ,inject} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { NavbarComponent } from '../../navbar/navbar.component';
@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports:[RouterOutlet,RouterLink,FormsModule,CommonModule,NavbarComponent],
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
    this.adminService.onLoginSubmit(this.adminobject).subscribe((result:any) =>
    {

      console.log(result);
      if(result && result.message=="login Succesful"){
        this.router.navigateByUrl('/adminNav/book-search');
      }
      
    },
    (error: any) =>
      {
        alert('Invalid username and password');
        console.log(error);
    });
}
}
