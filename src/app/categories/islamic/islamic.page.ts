import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Book } from '../../model/Books';
import { ApiService } from '../../services/api.service';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavController } from '@ionic/angular';
import { AdmobService } from 'src/app/services/admob/admob.service';

@Component({
  selector: 'app-islamic',
  templateUrl: './islamic.page.html',
  styleUrls: ['./islamic.page.scss'],
})
export class IslamicPage implements OnInit {

  public BookOutput;
  //Firestore
  Books : Book[];
  constructor(private apiService: ApiService, private router: Router, private statusBar: StatusBar,
    private navCtrl: NavController, private admobeService: AdmobService) { }

  //Firestore : Get Data   
  ngOnInit(): void {
    this.apiService.getislamicBooks().subscribe(books => {
      this.Books = books;
    })

    this.statusBar.backgroundColorByHexString('#4754e3');
  }

  Outputfct(item: Book){
    this.admobeService.ShowInterstitial();
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
