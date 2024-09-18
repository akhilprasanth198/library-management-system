import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NavbarComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  getBooks(){

  }
}
