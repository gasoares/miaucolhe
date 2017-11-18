import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, Events } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
	selector: 'page-pet-registration',
	templateUrl: 'pet-registration.html',
})
export class PetRegistrationPage {
	pet: any = {};
	user: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController, public toastCtrl: ToastController, public events: Events) {
		
		this.user = events.publish('userSession')[0];

	}

	ionViewDidLoad() {}

	submitPet() {
		let specie = this.pet.specie;
		let gender = this.pet.gender;
		let name = this.pet.name;
		let birth = this.pet.birth;
		let user = this.user;

		let proceed = true;

		if (specie === undefined || specie === null || specie == '') {
			proceed = false;
		}

		if (gender === undefined || gender === null || gender == '') {
			proceed = false;
		}

		if (name === undefined || name === null || name == '') {
			proceed = false;
		}

		if (birth === undefined || birth === null || birth == '') {
			proceed = false;
		}

		if (user === undefined || user === null || user == '') {
			proceed = false;
		} else {
			this.pet.created_by = user;
		}

		if (proceed) {
			let headers = new Headers({ 'Content-Type': 'application/json' });
			let options = new RequestOptions({ headers: headers });

			this.http.post('http://localhost:3000/api/pets', this.pet, options)
			.map(res => res.json())
			.subscribe(data => {

				if (data != null) {

					this.presentToast('Cadastro de pet efetuado com sucesso!');
					setTimeout(function() {
						// Redirect user here...
					}, 3000);

				} else {
					this.showAlert('Atenção', 'Erro ao cadastrar pet! Por favor, tente novamente.');
				}

			});
		} else {
			this.showAlert('Atenção', "Os preencha os campos obrigatórios (*) obrigatórios!");
		}
	}

	presentToast(message) {
		let toast = this.toastCtrl.create({
			message: message,
			duration: 3000
		});
		toast.present();
	}

	showAlert(title, message) {
		let alert = this.alertCtrl.create({
			title: title,
			subTitle: message,
			buttons: ['OK']
		});
		alert.present();
	}
}