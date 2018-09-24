import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { adminUsersSservices } from "../../../@core/data/admin-users.service";
import { NbThemeService } from "@nebular/theme";
import { takeWhile } from "rxjs/operators";

@Component({
  selector: "ngx-all-manage-admin",
  templateUrl: "./all-manage-admins.html",
  styleUrls: ["./all-manage-admins.scss"]
})
export class AllManageAdminsComponent {
  data: any;
  OrginalData: any;
  currentTheme: string;
  private alive = true;
  constructor(private service: adminUsersSservices, public router: Router ,public themeService: NbThemeService) {
    this.data = this.service.getData();
    this.OrginalData = this.data;
    this.themeService.getJsTheme()
    .pipe(takeWhile(() => this.alive))
    .subscribe(theme => {
      this.currentTheme = theme.name;

   });
  }

  OnPressDelete(i, id) {
    this.data.splice(i, 1);
  }
  OnPressEdit(idx, id) {
    this.router.navigate(["/pages/manage-admin/edit-manage-admin/", id]);
  }
  onPressAdd() {
    this.router.navigateByUrl("/pages/manage-admin/add-new-admin");
  }
  searchByFirstName(event) {
    this.data=this.OrginalData;
    let newArray = [];
    let value = event.target.value.toUpperCase();
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].firstName.toUpperCase().indexOf(value) > -1) {
        newArray.push(this.data[index]);
      }
    }
    this.data = newArray;
    if (value == "" || value == null) { this.data = this.OrginalData;}
  }

  searchByLastName(event) {
    this.data=this.OrginalData;
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
  searchByEmail(event) {
    this.data=this.OrginalData;
    let newArray = [];
    let value = event.target.value.toUpperCase();
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].email.toUpperCase().indexOf(value) > -1) {
        newArray.push(this.data[index]);
      }
    }
    this.data = newArray;
    if (value == "" || value == null) {this.data = this.OrginalData;}
  }
}
