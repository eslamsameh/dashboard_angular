import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-add-new-feature-product",
  templateUrl: "./add-new-feature-products.html",
  styleUrls: ["./add-new-feature-product.scss"]
})
export class addNewFeatureProductPage {
  iscategory: any = false;

constructor(public router:Router) {}
OnPressSubmit() {
    this.router.navigateByUrl("/pages/featureProducts/get-all-feature-products");
  }

select(event) {
    let choosen = event.target.value;
    if (choosen == "Category") {this.iscategory = true;} else {this.iscategory = false;}
  }
}
