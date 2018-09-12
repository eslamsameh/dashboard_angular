import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-edit-feature-products",
  styleUrls: ["./edit-feature-product.scss"],
  templateUrl: "./edit-feature-product.html"
})
export class editFeatureProduct {
  iscategory:any=false;
  constructor(public router: Router) {}

  OnPressSubmit() {
    this.router.navigateByUrl("/pages/featureProducts/get-all-feature-products");
  }
  select(event) {
    let choosen = event.target.value;
    if (choosen == "Category") {this.iscategory = true;} else {this.iscategory = false;}
  }
}
