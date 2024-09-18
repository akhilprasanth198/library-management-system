// import { Component } from '@angular/core';

// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-borrow-book',
//   standalone : true,
//   imports :[FormsModule],
//   templateUrl: './borrow-book.component.html',
//   styleUrls: ['./borrow-book.component.css']
// })
// export class BorrowBookComponent {
//   userId: number = 0;
//   bookId: number = 0;
//   message: string = '';

//   constructor(private borrowService: BorrowService) {}

//   onBorrow() {
//     if (this.userId && this.bookId) {
//       this.borrowService.borrowBook(this.userId, this.bookId)
//         .subscribe({
//           next: (response) => this.message = response,
//           error: (error) => this.message = error.error
//         });
//     }
//   }
// }
