import { Component } from '@angular/core';
import { Router,RouterOutlet,RouterLink } from '@angular/router';
@Component({
  selector: 'app-usernav',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './usernav.component.html',
  styleUrl: './usernav.component.css'
})
export class UsernavComponent {

  constructor(private router: Router) {}

  onLogout() {
    console.log('User logged out');
    this.router.navigate(['/']);
  }

}
