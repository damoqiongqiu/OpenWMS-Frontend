import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  ActivatedRouteSnapshot,
  RouterState,
  RouterStateSnapshot
} from '@angular/router';
import { setTimeout } from 'timers';
import { AuthService } from '../common/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user = { userName: '', password: '' };

  constructor(public router: Router, public activatedRoute: ActivatedRoute, private authService: AuthService) {}

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    this.authService.loggin().subscribe(() => {
      const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/workspace';
      this.router.navigate([redirect]);
    });
    // this.router.navigateByUrl('workspace');
  }

  forgetPwd() {}
}
