import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-disconnect',
  templateUrl: './disconnect.page.html',
  styleUrls: ['./disconnect.page.scss'],
})
export class DisconnectPage implements OnInit {

  constructor(private network: Network, 
    private router: Router) { }

  ngOnInit() {
  }

  retry(){
    this.network.onConnect().subscribe(() => {
      this.router.navigate(['/items'])
    });
  }

}
