import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-add-new-admin",
  templateUrl: "./add-new-admin.html",
  styleUrls: ["./add-new-admin.scss"]
})
export class AddNewAdminComponent {
  /**
   *
   */
  constructor(public router: Router) {}
  OnPressSubmit() {
    this.router.navigateByUrl("/pages/manage-admin/get-all-manage-admins");
  }
}
