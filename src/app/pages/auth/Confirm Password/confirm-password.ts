import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-auth-elements",
  templateUrl: "./confirm-password.html",
  styleUrls: ["./confirm-password.scss"]
})
export class ConfirmPasswordPageComponent {
  ConfirmPassword: any;
  password: any;
  constructor(public router: Router) {}
  OnPressChangePassword() {
    this.router.navigateByUrl("/auth/login");
  }
}
