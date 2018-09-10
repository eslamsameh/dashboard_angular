import { Component } from "@angular/core";
import { categoryService } from "../../../@core/data/category.service";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-get-all-artical",
  templateUrl: "./get-all-artical.html",
  styleUrls: ["./get-all-artical.scss"]
})
export class GetAllArticalComponent {
  data: any;
  OrginalData: any;
  PriceRange: any = false;
  min: any = 0;
  max: any = 1000;
  range: any;

  constructor(private service: categoryService, public router: Router) {
    this.data = this.service.getData();
    this.OrginalData = this.data;
  }

  OnPressDelete(idx, id) {
    this.data.splice(idx, 1);
  }
  OnPressEdit(idx, id) {
    this.router.navigate(["/pages/artical/edit-artical/", id]);
  }
  onPressAdd() {
    this.router.navigateByUrl("/pages/artical/add-new-artical");
  }
  searchByProductName(event) {
    let newArray = [];
    let value = event.target.value.toUpperCase();
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].CategoryName.toUpperCase().indexOf(value) > -1) {
        newArray.push(this.data[index]);
      }
    }
    this.data = newArray;
    if (value == "" || value == null) {
      this.data = this.OrginalData;
    }
  }

  OnChangeSelectSortBy(e) {
    let ChossenSorting = e.target.value;
    if (ChossenSorting == "Price") {
      this.PriceRange = true;
    } else {
      this.PriceRange = false;
    }
  }
  OnPressSearch() {
    this.range = this.max - this.min;
    console.log(this.range);
  }
  OnPressCancel() {
    this.PriceRange = false;
  }
}
