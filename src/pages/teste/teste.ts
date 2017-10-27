import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-teste',
  templateUrl: 'teste.html',
})
export class TestePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestePage');
  }

  closeModal() {

  	let data = {
  		title: 'Hello',
  		message: 'How are you?'
  	};

  	this.viewCtrl.dismiss(data);
  }

}
