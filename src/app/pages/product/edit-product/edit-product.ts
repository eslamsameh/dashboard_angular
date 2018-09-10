import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-edit-products',
  styleUrls: ['./edit-produuct.scss'],
  templateUrl: './edit-product.html',
})
export class editProduct {
  starRate = 2;
  heartRate = 4;
constructor(public router:Router) {}

  OnPressSubmit(){
    this.router.navigateByUrl('/pages/products/get-all-products');
  }
}

