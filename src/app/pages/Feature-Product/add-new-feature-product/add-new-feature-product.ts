import { Component } from "@angular/core";

@Component({
  selector: "ngx-add-new-feature-product",
  templateUrl: "./add-new-feature-products.html",
  styleUrls: ["./add-new-feature-product.scss"]
})
export class addNewFeatureProductPage {
  iscategory: any = false;

  OnPressSubmit() {}
  select(event) {
    let choosen = event.target.value;
    if (choosen == "Category") {this.iscategory = true;} else {this.iscategory = false;}
  }
}
