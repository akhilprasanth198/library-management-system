import { Component,inject } from '@angular/core';
import { RouterLink, RouterOutlet,Router } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { NavlogComponent } from './navlog/navlog.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,RouterLink,NgIf,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='library';
  isDashboardRoute = false;
  isNavlogRoute = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event.url) {
        // Update this condition based on your actual dashboard routes
        this.isDashboardRoute = event.url.includes('/admin') || event.url.includes('/user');
      }
      if (event && event['url']) {
        this.isNavlogRoute = event.url.includes('/book-search') || event.url.includes('/user-search') || event.url.includes('/add-book');
      }
      if (event && event['url']) {
        this.isNavlogRoute = event.url.includes('/book-search') || event.url.includes('/borrow') || event.url.includes('/user-details');
      }

    });
  }
}