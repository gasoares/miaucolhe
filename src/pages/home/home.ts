import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SecondPage } from '../second/second';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	pets: any;
	username: any = "Guilherme";

	constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
		this.pets = [
			{ name: "Rambo", age: "15 years", gender: "Male", specie: "Dog" },
			{ name: "Nina", age: "8 years", gender: "Female", specie: "Dog" },
			{ name: "Marrom", age: "3 years", gender: "Male", specie: "Cat" }
		];
	}

	handleClick(pet) {
		console.log("I've been clicked.");
		console.log(pet);
	}

	submitUser() {
		console.log("Saving user...");
		console.log(this.username);
	}

	launchSecondPage() {


		let modal = this.modalCtrl.create(SecondPage);

		modal.onDidDismiss((data) => {
			console.log(data);
		});

		modal.present();

	}

}
