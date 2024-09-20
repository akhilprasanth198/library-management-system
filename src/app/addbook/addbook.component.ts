import { CommonModule } from '@angular/common';
import { Component ,inject} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { BookService } from '../services/book-service.service';

@Component({
  selector: 'app-addbook',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet,FormsModule],
  templateUrl: './addbook.component.html',
  styleUrl: './addbook.component.css'
})
export class AddbookComponent {
  addobj:any={
    title:'',
    author:'',
    language:'',
    category:'',
    quantity:0
  }
  addservice=inject(BookService);
  router=inject(Router);
addbook(){
  
      this.addservice.onAddbook(this.addobj).subscribe(
        (result: any) => {
          console.log('Book Added:', result);
          alert('Book added');
        },
        (error)=>
        {
          alert("Book adding failed" );
        });

  }
}
