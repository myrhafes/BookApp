import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController, Platform } from '@ionic/angular';
import { AdmobService } from '../services/admob/admob.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  constructor(private statusBar: StatusBar, private menuController: MenuController, 
    private admobService: AdmobService, private platform: Platform) {
     }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#4754e3');
  }
  
  openMenu(){
    this.menuController.open();
    this.admobService.ShowInterstitial();
  }

  ads(){
    this.admobService.ShowInterstitial();
  }

}
