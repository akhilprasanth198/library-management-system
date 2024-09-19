import { Component } from '@angular/core';
import { UserSearchService } from '../services/user-search.service';
import { User } from '../model/user';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [FormsModule,CommonModule,NgFor],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.css'
})
export class UserSearchComponent {
  users: User[] = [];
  uid : number = 0;
  name: string = '';
  email: string = '';

  constructor(private usersearch: UserSearchService) { }

  ngOnInit(): void { }

  search(): void {
    this.usersearch.searchUsers(this.uid, this.name, this.email)
      .subscribe((result: User[]) => {
        this.users = result;
      });
  }
  
}
