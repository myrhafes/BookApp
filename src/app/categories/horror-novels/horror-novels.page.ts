import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Book } from 'src/app/model/Books';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-horror-novels',
  templateUrl: './horror-novels.page.html',
  styleUrls: ['./horror-novels.page.scss'],
})
export class HorrorNovelsPage implements OnInit {

  public BookOutput;
  //Firestore
  Books : Book[];
  constructor(private apiService: ApiService, private router: Router) { }

  //Firestore : Get Data   
  ngOnInit(): void {
    this.apiService.gethorrorBooks().subscribe(books => {
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
