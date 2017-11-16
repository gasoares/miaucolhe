import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PetList } from '../pages/pet-list/pet-list';
import { SecondPage } from '../pages/second/second';
import { LoginPage } from '../pages/login/login';
import { TestePage } from '../pages/teste/teste';
import { ListOngPage } from '../pages/list-ong/list-ong';
import { OngInfoPage } from '../pages/ong-info/ong-info';
import { PetInfoPage } from '../pages/pet-info/pet-info';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PetList,
    SecondPage,
    LoginPage,
    ListOngPage,
    TestePage,
    PetInfoPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PetList,
    SecondPage,
    LoginPage,
    ListOngPage,
    TestePage,
    PetInfoPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
