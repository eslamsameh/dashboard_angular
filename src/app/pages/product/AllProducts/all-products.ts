import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableService } from "../../../@core/data/smart-table.service";
import { Router } from "@angular/router";
import { NbThemeService } from "@nebular/theme";
import { takeWhile } from "rxjs/operators";
@Component({
  selector: "ngx-all-products",
  styleUrls: ["./all-products.scss"],
  templateUrl: "./all-products.html"
})
export class allproductsComponent {
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

  OnPressDelete(id, productid) {
    this.data.splice(id, 1);
  }
  OnPressEdit(idx, productid) {
    this.router.navigate(["/pages/products/edit-product/", productid,0]);
  }
  onPressAdd() {
    this.router.navigateByUrl("/pages/products/add-new-product");
  }
  searchByProductName(event) {
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

  searchByProductPrice(event) {
    this.data=this.OrginalData;
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
    this.data=this.OrginalData;
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
