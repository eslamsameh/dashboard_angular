import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-form-elements',
  templateUrl: './add-new-category.html',
  styleUrls:['./add-new-category.scss']

})
export class addNewCategoryPage {

  constructor(public router:Router) {


  }
  OnPressSubmit(){
    this.router.navigateByUrl('pages/category/get-all-category');

  }
}
