import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Book } from 'src/app/model/Books';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-history-book',
  templateUrl: './history-book.page.html',
  styleUrls: ['./history-book.page.scss'],
})
export class HistoryBookPage implements OnInit {

  public BookOutput;
  //Firestore
  Books : Book[];
  constructor(private apiService: ApiService, private router: Router) { }

  //Firestore : Get Data   
  ngOnInit(): void {
    this.apiService.gethistoryBooks().subscribe(books => {
      this.Books = books;
    })
  }

  Outputfct(item: Book){
    this.BookOutput = item;
    console.log(this.BookOutput);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.BookOutput)
      } 
    }
    this.router.navigate(['pdf'], navigationExtras);
  }


}
