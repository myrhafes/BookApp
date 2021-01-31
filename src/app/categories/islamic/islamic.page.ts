import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Book } from '../../model/Books';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-islamic',
  templateUrl: './islamic.page.html',
  styleUrls: ['./islamic.page.scss'],
})
export class IslamicPage implements OnInit {

  public BookOutput;
  //Firestore
  Books : Book[];
  constructor(private apiService: ApiService, private router: Router) { }

  //Firestore : Get Data   
  ngOnInit(): void {
    this.apiService.getislamicBooks().subscribe(books => {
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
