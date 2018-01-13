import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { setTimeout } from 'timers';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public user={};

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
