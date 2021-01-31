import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Book } from 'src/app/model/Books';
import { ApiService } from 'src/app/services/api.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-international-novels',
  templateUrl: './international-novels.page.html',
  styleUrls: ['./international-novels.page.scss'],
})
export class InternationalNovelsPage implements OnInit {

  public BookOutput;
  //Firestore
  Books : Book[];
  constructor(private apiService: ApiService, private router: Router, private statusBar: StatusBar,
    private navCtrl: NavController) { }

  //Firestore : Get Data   
  ngOnInit(): void {
    this.apiService.getinternationalBooks().subscribe(books => {
      this.Books = books;
    })

    this.statusBar.backgroundColorByHexString('#4754e3');
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

  goback() {
    this.navCtrl.pop();
  }
}
