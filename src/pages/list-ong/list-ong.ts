import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { TestePage } from '../teste/teste';

@IonicPage()
@Component({
  selector: 'page-list-ong',
  templateUrl: 'list-ong.html',
})
export class ListOngPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListOngPage');
  }

  showONGDetails() {
  	let modal = this.modalCtrl.create(TestePage);

	modal.onDidDismiss((data) => {
		console.log(data);
	});

	modal.present();
  }

}
