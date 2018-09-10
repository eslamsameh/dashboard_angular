import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-add-new-products",
  styleUrls: ["./add-new-products.scss"],
  templateUrl: "./add-new-products.html"
})
export class addNewProductComponent {
  constructor(public router: Router) {}

  OnPressSubmit() {
    this.router.navigateByUrl("/pages/products/get-all-products");
  }
}
