import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../common/services/auth.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public user = { userName: "", password: "" };
  public fullClass = 'ui-state-filled';
  @ViewChild('username') username: ElementRef;
  @ViewChild('pwd') pwd: ElementRef;
  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public render: Renderer2,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.logout();
  }

  login() {
    this.authService.loggin().subscribe(() => {
      const redirect = this.authService.redirectUrl
        ? this.authService.redirectUrl
        : "/workspace";
      this.router.navigate([redirect]);
    });
  }

  forgetPwd() {}
  onUserNameBlur(value) {
    if (value.trim()) {
      this.render.addClass(this.username.nativeElement, this.fullClass);
    } else {
      this.render.removeClass(this.username.nativeElement, this.fullClass);
    }
  }
  onPasswordBlur(value) {
    if (value.trim()) {
      this.render.addClass(this.pwd.nativeElement, this.fullClass);
    } else {
      this.render.removeClass(this.pwd.nativeElement, this.fullClass);
    }
  }
}
