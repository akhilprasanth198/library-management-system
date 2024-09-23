import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navlog',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './navlog.component.html',
  styleUrl: './navlog.component.css'
})
export class NavlogComponent {
  constructor(private router: Router) {}

  onLogout() {
    console.log('User logged out');
    this.router.navigate(['/']);
  }
}
