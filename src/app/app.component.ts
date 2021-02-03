import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DarkmodeService } from './services/darkmode/darkmode.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Router } from '@angular/router';

const THEME_KEY= "app_theme";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent {

  checked = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private darkmodeService: DarkmodeService,
    private storage: Storage,
    private socialSharing: SocialSharing,
    private network: Network,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage.get(THEME_KEY).then(checked => {
        this.checked = checked;
      })
      this.network.onDisconnect().subscribe(() => {
        this.router.navigate(['/disconnect'])
      });
    });
  }

  darkModeToggle(){
    this.darkmodeService.darkModeTheme();
  }

  share(){
    var options = {
      message: 'share this', // not supported on some apps (Facebook, Instagram)
      subject: 'the subject', // fi. for email
      url: 'https://www.website.com/foo/#bar?a=b',
    };

    this.socialSharing.shareWithOptions(options);
  }

  
}
