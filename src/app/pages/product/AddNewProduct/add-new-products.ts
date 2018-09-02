import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-add-new-products',
  styleUrls: ['./add-new-products.scss'],
  templateUrl: './add-new-products.html',
})
export class addNewProductComponent {
  starRate = 2;
  heartRate = 4;
constructor(public router:Router) {


}

  OnPressSubmit(){
    this.router.navigateByUrl('/pages/ManageUser');
  }
}

