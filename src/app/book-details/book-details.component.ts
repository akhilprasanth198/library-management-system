import { Component, importProvidersFrom } from '@angular/core';
import { BookService } from '../book-service.service';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgFor,NgIf],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  book : any[]=[];
  constructor(private httpclient:HttpClient){}
  getBookDetails()
  {
    this.httpclient.get('https://localhost:7174/api/Books').subscribe((result:any) =>
      {
        this.book = result;
        console.log('Book Details :',this.book );
      });
      
  }
}
