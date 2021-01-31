import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Book } from 'src/app/model/Books';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-american-literature',
  templateUrl: './american-literature.page.html',
  styleUrls: ['./american-literature.page.scss'],
})
export class AmericanLiteraturePage implements OnInit {

  public BookOutput;
  //Firestore
  Books : Book[];
  constructor(private apiService: ApiService, private router: Router) { }

  //Firestore : Get Data   
  ngOnInit(): void {
    this.apiService.getamericanLiteratureBooks().subscribe(books => {
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
