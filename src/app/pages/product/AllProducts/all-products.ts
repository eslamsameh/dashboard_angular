import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableService } from "../../../@core/data/smart-table.service";
import { Router } from "@angular/router";
@Component({
  selector: "ngx-all-products",
  styleUrls: ["./all-products.scss"],
  templateUrl: "./all-products.html"
})
export class allproductsComponent {
  data: any;
  OrginalData: any;

  constructor(private service: SmartTableService, public router: Router) {
    this.data = this.service.getData();
    this.OrginalData = this.data;
  }

  OnPressDelete(id, productid) {
    this.data.splice(id, 1);
  }
  OnPressEdit(idx, productid) {
    this.router.navigate(["/pages/products/edit-product/", productid]);
  }
  onPressAdd() {
    this.router.navigateByUrl("/pages/products/add-new-product");
  }
  searchByProductName(event) {
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

  searchByProductPrice(event) {
    let newArray = [];
    let value = event.target.value.toUpperCase();
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].lastName.toUpperCase().indexOf(value) > -1) {
        newArray.push(this.data[index]);
      }
    }
    this.data = newArray;
    if (value == "" || value == null) { this.data = this.OrginalData;}
  }
  searchByProductDesc(event) {
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
}
