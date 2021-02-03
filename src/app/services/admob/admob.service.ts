import { Injectable } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AdmobService {

  //BANNER CONFIG
  bannerConfig: AdMobFreeBannerConfig = {
  isTesting: true, // KEEP DURING CODING, REMOVE AT PROD.
  autoShow: true,
  
  id: "ca-app-pub-1615011014624383/4791439286"
  };

  //INTERSTITIAL CONFIG
  interstitialConfig: AdMobFreeInterstitialConfig = {
  isTesting: true, // KEEP DURING CODING, REMOVE AT PROD.
  autoShow: false,
  id: "ca-app-pub-1615011014624383/8155969224"
  };

  constructor(
    public platform: Platform,
    private admobFree: AdMobFree) {
      //LOAD ADS AT PLATFORM READY PROMISE.
      platform.ready().then(()=>{

        //BANNER
        this.admobFree.banner.config(this.bannerConfig);

        //INTERSTITIAL
        this.admobFree.interstitial.config(this.interstitialConfig);
        this.admobFree.interstitial.prepare().then(() => {
        console.log('INTERSTIAL LOADED')
        }).catch(e =>
        console.log('PROBLEM LOADING INTERSTITIAL: ', e)
        );
      });
  }

  ShowBanner() {
    //CHECK AND SHOW BANNER
    this.admobFree.banner.prepare().then(() => {
    console.log('BANNER LOADED')
    }).catch(e =>
    console.log('PROBLEM LOADING BANNER: ', e)
    );
  }

  ShowInterstitial() {
    //CHECK AND SHOW INTERSTITIAL
    this.admobFree.interstitial.isReady().then(() => {
    //AT .ISREADY SHOW 
    this.admobFree.interstitial.show().then(() => {
    console.log('INTERSTITIAL LOADED')
    })
    .catch(e => console.log('PROBLEM LOADING REWARD VIDEO: ', e)  );
    })
    .catch(e => console.log('PROBLEM LOADING REWARD VIDEO: ', e)  );
  }
}
