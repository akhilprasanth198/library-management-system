import { Component ,inject} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  registerobject:any={
    name:'',
    email:'',
    password:''

  }
  
  registerService= inject(RegisterService);
  router =inject(Router);
  doRegister()
  {
      this.registerService.onRegisterSubmit(this.registerobject).subscribe(
        (result: any) => {
          console.log('Registration successful:', result);
          this.router.navigateByUrl('/login/user-login');
        },
        (error)=>
        {
          alert("Registration failed" )
        });

  }
}