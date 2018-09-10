import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { adminUsersSservices } from "../../../@core/data/admin-users.service";

@Component({
  selector: "ngx-all-manage-admin",
  templateUrl: "./all-manage-admins.html",
  styleUrls: ["./all-manage-admins.scss"]
})
export class AllManageAdminsComponent {
  data: any;
  OrginalData: any;

  constructor(private service: adminUsersSservices, public router: Router) {
    this.data = this.service.getData();
    this.OrginalData = this.data;
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
