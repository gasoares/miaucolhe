import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  login() {
	  return new Promise((resolve) => {
	  	setTimeout(() => {
	  		resolve(false);
	  	}, 3000);
	  });
  }

}
