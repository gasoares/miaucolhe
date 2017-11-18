import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Nav, Platform, LoadingController, Events } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { PetList } from '../pages/pet-list/pet-list';
import { ListOngPage } from '../pages/list-ong/list-ong';
import { RegisterPage } from '../pages/register/register';
import { PetRegistrationPage } from '../pages/pet-registration/pet-registration';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = RegisterPage;
    loader: any;
    userSession: any = [{
        _id: null,
        name: null,
        email: null
    }];

    pages: Array<{title: string, component: any, icon: string}>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public loadingCtrl: LoadingController, public events: Events) {
        this.initializeApp();

        this.pages = [
        { title: 'Meu Perfil', component: HomePage, icon: 'person' },
        { title: 'Lista de Pets', component: PetList, icon: 'paw' },
        { title: 'Lista de ONGs', component: ListOngPage, icon: 'list' }
        ];

        events.subscribe('userSession', () => {
            return this.getUserSession();
        });

    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    getUserSession() {
        return this.userSession;
    }
}
