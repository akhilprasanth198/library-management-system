import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-admin-registration',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent],
  templateUrl: './admin-registration.component.html',
  styleUrl: './admin-registration.component.css'
})
export class AdminRegistrationComponent {

}
