// import { Component } from '@angular/core';
// // import { BorrowService } from '../services/borrow-service.service';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-return-book',
//   standalone : true,
//   imports : [FormsModule],
//   templateUrl: './return-book.component.html',
//   styleUrls: ['./return-book.component.css']
// })
// export class ReturnBookComponent {
//   userId: number = 0;
//   bookId: number = 0;
//   message: string = '';

//   constructor(private borrowService: BorrowService) {}

//   onReturn() {
//     if (this.userId && this.bookId) {
//       this.borrowService.returnBook(this.userId, this.bookId)
//         .subscribe({
//           next: (response) => this.message = response,
//           error: (error) => this.message = error.error
//         });
//     }
//   }
// }

