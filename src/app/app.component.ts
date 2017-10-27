import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { PetList } from '../pages/pet-list/pet-list';
import { ListOngPage } from '../pages/list-ong/list-ong';

import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListOngPage;
  loader: any;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public auth: AuthProvider, public loadingCtrl: LoadingController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Meu Perfil', component: HomePage, icon: 'person' },
      { title: 'Lista de Pets', component: PetList, icon: 'paw' },
      { title: 'Lista de ONGs', component: ListOngPage, icon: 'list' }
    ];

    //this.presentLoading();

    this.auth.login().then((isLoggedIn) => {
      if(!isLoggedIn){
        //this.rootPage = HomePage;
      } else {
        //this.rootPage = LoginPage;
      }

      //this.loader.dismiss();
    });

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Autenticando...",
    });

    this.loader.present();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
