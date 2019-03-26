import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(public router: Router,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.logout();
  }

  public doLogin() {
    this.authService.loggin().subscribe(() => {
      const redirect = this.authService.redirectUrl
        ? this.authService.redirectUrl
        : "/workspace";
      this.router.navigate([redirect]);
    });
  }
}
