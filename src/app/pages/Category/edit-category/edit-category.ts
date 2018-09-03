import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-form-elements',
  templateUrl:'./edit-category.html',
  styleUrls:['./edit-category.scss']
})
export class EditCategoryComponent {
  constructor(public router:Router) {}
  OnPressSubmit(){
    this.router.navigateByUrl('pages/category/get-all-category');
  }
}
