import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { PetList } from '../pet-list/pet-list';


@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {

	username: any;
	password: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public modalCtrl: ModalController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

	submitUser() {

	    let data = {
	    	username: this.username,
	    	password: this.password
	    };

	    if (this.username == 'guilherme') {
	    	if (this.password == '1234') {
	    		let modal = this.modalCtrl.create(PetList);

				modal.onDidDismiss((data) => {
					console.log(data);
				});

				modal.present();
	    	} else {
	    		console.log('Wrong password.');
	    	}
	    } else {
	    	console.log('User not found.');
	    }

	}

}
