import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
	selector: 'page-register',
	templateUrl: 'register.html',
})
export class RegisterPage {
	user: any = {};

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController, public toastCtrl: ToastController) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RegisterPage');
	}

	submitUser() {
		let name = this.user.name;
		let email = this.user.email;
		let password = this.user.password;

		let proceed = true;

		if (name === undefined || name == null || name == '') {
			console.log('Por favor, preencha o campo nome!');
			proceed = false;
		}

		if (email === undefined || email == null || email == '') {
			console.log('Por favor, preencha o campo email!');
			proceed = false;
		}

		if (password === undefined || password == null || password == '') {
			console.log('Por favor, preencha o campo senha!');
			proceed = false;
		}

		if (proceed) {
			console.log('Proceed to register user...');

			this.http.get('http://localhost:3000/api/users/email/' + email)
			.map(res => res.json())
			.subscribe(data => {
				console.log(data);
				if (data === null) {
					
					console.log('Connect to API and post...');
					let headers = new Headers({ 'Content-Type': 'application/json' });
					let options = new RequestOptions({ headers: headers });

					this.http.post('http://localhost:3000/api/users', this.user, options)
					.map(res => res.json())
					.subscribe(data => {
						if (data != null) {
							this.presentToast('Cadastro efetuado com sucesso!');
							setTimeout(function() {
								console.log('Redirect user...');
							}, 3000);
						} else {
							this.showAlert('Atenção', 'Erro ao efetuar cadastro! Por favor, tente novamente.');
						}
					});

				} else {
					this.showAlert('Atenção', 'Já existe um usuário cadastrado com este e-mail!');
				}
			});
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
