import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

	username: string = "guilherme";

	constructor(public http: Http) {
		console.log('Hello UserProvider Provider');
	}

}
