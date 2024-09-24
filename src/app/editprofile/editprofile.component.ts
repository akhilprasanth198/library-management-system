import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css'
})
export class EditprofileComponent implements OnInit {
  user: User | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.userService.getLoggedInUserProfile().subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.error('Error loading user profile', error);
      }
    );
  }


  updateProfile(): void {
    if (this.user) {
      this.userService.updateUserProfile(this.user).subscribe(
        (updatedUser) => {
          console.log('User profile updated', updatedUser);
          this.router.navigate(['/profile']);  
        },
        (error) => {
          console.error('Error updating profile', error);
        }
      );
    }
  }

}