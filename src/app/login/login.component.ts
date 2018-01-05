import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { User } from '../bz-modules/models/user-model';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public user: User = new User();

	constructor(
		public router: Router,
		public activatedRoute: ActivatedRoute
	) {

	}

	ngOnInit() {

	}

	login() {
		this.router.navigateByUrl("workspace");
	}
	forgetPwd() {
		
	}
}
