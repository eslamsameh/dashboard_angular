import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-new-artical-category',
 templateUrl:'./add-new-artical-category.html',
 styleUrls:['./add-new-artical-category.scss']
})
export class AddNewArticalCategoryComponent {
  constructor(public router:Router) {


  }
  OnPressSubmit(){
    this.router.navigateByUrl('pages/artical-category/get-all-artical-category');

  }
}
