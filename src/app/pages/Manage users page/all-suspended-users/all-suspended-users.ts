import { Component } from "@angular/core";

import { SmartTableService } from "../../../@core/data/smart-table.service";
import { Router } from "@angular/router";
import { NbThemeService } from "@nebular/theme";
import { takeWhile } from "rxjs/operators";
@Component({
  selector: "ngx-all-suspended-user",
  styleUrls: ["./all-suspended-users.scss"],
  templateUrl: "./all-suspended-user.html"
})
export class allSuspendedUserPage {
  data: any;
  OrginalData: any;
  currentTheme: string;
  private alive = true;
  constructor(private service: SmartTableService, public router: Router,public themeService: NbThemeService) {
    this.data = this.service.getData();
    this.OrginalData = this.data;
    this.themeService.getJsTheme()
    .pipe(takeWhile(() => this.alive))
    .subscribe(theme => {
      this.currentTheme = theme.name;

   });
  }

  OnPressDelete(idx, id) {
    this.data.splice(idx, 1);
  }
  OnPressDeleteSuspend(idx, id) {
    this.data.splice(idx, 1);
  }
  OnPressManageUser(idx, id) {
    this.router.navigate(["/pages/ManageUser/manage-user/", id]);
  }

  searchByFirstName(event) {
    let newArray = [];
    let value = event.target.value.toUpperCase();
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].firstName.toUpperCase().indexOf(value) > -1) {
        newArray.push(this.data[index]);
      }
    }
    this.data = newArray;
    if (value == "" || value == null) {this.data = this.OrginalData;}
  }

  searchByLastName(event) {
    let newArray = [];
    let value = event.target.value.toUpperCase();
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].lastName.toUpperCase().indexOf(value) > -1) {
        newArray.push(this.data[index]);
      }
    }
    this.data = newArray;
    if (value == "" || value == null) {this.data = this.OrginalData;}
  }
  searchByUserName(event) {
    let newArray = [];
    let value = event.target.value.toUpperCase();
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].username.toUpperCase().indexOf(value) > -1) {
        newArray.push(this.data[index]);
      }
    }
    this.data = newArray;
    if (value == "" || value == null) { this.data = this.OrginalData;}
  }
}
