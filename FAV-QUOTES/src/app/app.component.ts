import { Component ,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
// import { QuotesPage } from '../pages/quotes/quotes';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any =TabsPage;
  settingsPage:any=SettingsPage;

  @ViewChild('nav') nav:NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public menuCtrl:MenuController ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onLoad(page:any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

