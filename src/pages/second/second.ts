import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    
  	let title = this.navParams.get('title');
  	console.log("Title: " + title);

  }

  closeModal() {

  	let data = {
  		title: 'Hello',
  		message: 'How are you?'
  	};

  	this.viewCtrl.dismiss(data);
  }

}
