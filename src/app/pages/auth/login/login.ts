import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.html",
  styleUrls: ["./login.scss"]
})
export class LoginPageComponent {
  userName: any;
  password: any;

  constructor(public router: Router) {}
  OnPressLogin() {
    this.router.navigateByUrl("pages");
  }
}
