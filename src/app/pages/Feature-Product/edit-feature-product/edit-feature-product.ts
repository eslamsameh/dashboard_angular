import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-edit-feature-products',
  styleUrls: ['./edit-feature-product.scss'],
  templateUrl: './edit-feature-product.html',
})
export class editFeatureProduct {

constructor(public router:Router) {


}

  OnPressSubmit(){
    this.router.navigateByUrl('/pages/featureProducts/get-all-feature-products');
  }
}

