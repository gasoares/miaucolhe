import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
	selector: 'page-pet-list',
	templateUrl: 'pet-list.html'
})
export class PetList {
	pets: any;
	noResultsMessage: any;

	constructor(public navCtrl: NavController, public http: Http, public modalCtrl: ModalController, public viewCtrl: ViewController) {

		this.http.get('http://localhost:3000/api/pets').map(res => res.json()).subscribe(data => {

			// console.log(data);

			if (data.length > 0) {

				for (var i = 0; i < data.length; i++) {
					if (data[i].gender == 1) {
						data[i].gendericon = '<ion-icon name="male"></ion-icon>';
						data[i].gendertext = 'Macho';
					} else {
						data[i].gendericon = '<ion-icon name="female"></ion-icon>';
						data[i].gendertext = 'Fêmea';
					}

					if (data[i].specie == 1) {
						data[i].gendericon = '<ion-icon name="male"></ion-icon>';
						data[i].specietext = 'Cachorro';
					} else {
						data[i].gendericon = '<ion-icon name="female"></ion-icon>';
						data[i].specietext = 'Gato';
					}
				}

				this.pets = data;
			} else {
				this.showNoResultsMessage();
			}

		});
	}

	getAgeText(birthdate) {
		let ageText;
		let age;

		let birthday = new Date(birthdate);
		let now = new Date();

		let yearBirth = birthday.getUTCFullYear();
		let yearNow = now.getUTCFullYear();

		let yearDiff = yearNow - yearBirth;

		if (yearDiff == 0) {

			let monthBirth = birthday.getUTCMonth() + 1;
			let monthNow = now.getUTCMonth() + 1;

			let monthDiff = monthNow - monthBirth;

			ageText = monthDiff == 1 ? ' mês' : ' meses';
			age = monthDiff + ageText;

		} else {

			ageText = yearDiff == 1 ? ' ano' : ' anos';
			age = yearDiff + ageText;			

		}

		return age;
	}; 

	showNoResultsMessage() {
		this.noResultsMessage = "Nenhum pet encontrado.";
	}

	isFemale(gender) {
		return (gender == 2);
	}

	closeModal() {

		let data = {
			title: 'Hello',
			message: 'How are you?'
		};

		this.viewCtrl.dismiss(data);
	}

}
