import { Injectable, Output } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const THEME_KEY= "app_theme";

@Injectable({
  providedIn: 'root'
})

export class DarkmodeService {
  darkMode = false;

  constructor(private platform: Platform, private storage: Storage) {
    this.platform.ready().then(() => {

      this.storage.get(THEME_KEY).then(theme => {
        this.setAppTheme(theme);
      })

      const preferDark = window.matchMedia("(prefers-color-scheme: dark)");

      preferDark.addListener(e => {
        this.setAppTheme(e.matches);
      })
    });
  }

  darkModeTheme(){
    this.darkMode = !this.darkMode;
    this.setAppTheme(this.darkMode);
  }

  setAppTheme(dark){
    this.darkMode = dark;

    if(this.darkMode){
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }

    this.storage.set(THEME_KEY, this.darkMode);
  }

  isActive() : Boolean{
    return this.darkMode;
  }
}
