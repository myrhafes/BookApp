import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  constructor(private statusBar: StatusBar, private menuController: MenuController) { }

  ngOnInit() {
    this.statusBar.backgroundColorByHexString('#4754e3');
  }
  
  openMenu(){
    this.menuController.open();
  }
}
