import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav, Platform, LoadingController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { PetList } from '../pages/pet-list/pet-list';
import { ListOngPage } from '../pages/list-ong/list-ong';
import { RegisterPage } from '../pages/register/register';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = RegisterPage;
    loader: any;

    pages: Array<{title: string, component: any, icon: string}>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public loadingCtrl: LoadingController) {
        this.initializeApp();

        this.pages = [
            { title: 'Meu Perfil', component: HomePage, icon: 'person' },
            { title: 'Lista de Pets', component: PetList, icon: 'paw' },
            { title: 'Lista de ONGs', component: ListOngPage, icon: 'list' }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
