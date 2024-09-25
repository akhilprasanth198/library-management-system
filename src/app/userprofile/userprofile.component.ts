import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent implements OnInit {
  user: User = { uid: 0, name: '', email: '', password: '' };

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUserDetails();
  }

  // Load user details on component initialization
  loadUserDetails() {
    const userId = this.authService.getUserId();  // Get user ID from auth service
    if (userId) {
      this.userService.getUserDetails(userId).subscribe((data: User) => {
        console.log("User Data:", data);
        this.user = data;
      }, error => {
        console.error("Failed to load user details:", error);
      });
    } else {
      console.error("No user ID found. User might not be logged in.");
    }
  }

  // Update user details
  updateUserDetails() {
    this.userService.updateUserDetails(this.user.uid, this.user).subscribe(response => {
      alert(response.message);
    }, error => {
      console.error("Error updating user details:", error);
      alert("Failed to update user details");
    });
  }
}
