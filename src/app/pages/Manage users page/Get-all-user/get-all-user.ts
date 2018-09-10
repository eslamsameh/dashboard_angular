import { Component } from "@angular/core";

import { SmartTableService } from "../../../@core/data/smart-table.service";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-manage-user-table",
  templateUrl: "./get-all-users.html",
  styleUrls: ["./get-all-users.scss"]
})
export class GelAllUserPageComponent {
  data: any;
  OrginalData: any;
  selectedItems = [];
  SelectALL: any = true;
  index: any;
  idData: any;
  myRadio: any;
  OpenDate: any = false;
  from: any;
  to: any;

  constructor(private service: SmartTableService, public router: Router) {
    this.data = this.service.getData();
    this.OrginalData = this.data;
  }

  OnPressEdit(idx, id) {
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
    if (value == "" || value == null) { this.data = this.OrginalData; }
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
    if (value == "" || value == null) {this.data = this.OrginalData;}
  }
  onPressSelect(id, i) {
    if (this.selectedItems.indexOf(id) > -1) {this.selectedItems.splice(i, 1);}
     else {this.selectedItems.push(id);}

  }

  OnPressSelectAll() {
    this.SelectALL = !this.SelectALL;
    let checkboxes = document.getElementsByName("foo") as HTMLCollectionOf<HTMLInputElement>;
    for (let i = 0, n = checkboxes.length; i < n; i++) {checkboxes[i].checked = true;}
  }

  OnPressNonSelectAll() {
    this.SelectALL = !this.SelectALL;
    let checkboxes = document.getElementsByName("foo") as HTMLCollectionOf<HTMLInputElement>;
    for (let i = 0, n = checkboxes.length; i < n; i++) {checkboxes[i].checked = false;}
  }

  OnPressOk() {
    this.data[this.index].is_suspend = !this.data[this.index].is_suspend;
  }

  OnPressClose() {
    this.data[this.index].is_suspend = true;
  }

  OnChaneg(event) {
    if (this.myRadio == "Date") {this.OpenDate = true;} else {this.OpenDate = false;}
  }

  OnPressSuspend(i, id) {
    this.index = i;
    this.idData = id;
    if (this.data[i].is_suspend == false) {this.data[i].is_suspend = true;}
  }
}
