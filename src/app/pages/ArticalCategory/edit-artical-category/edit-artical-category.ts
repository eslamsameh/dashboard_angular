import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-edit-artical-category',
  templateUrl:'./edit-artical-category.html',
  styleUrls:['./edit-artical-category.scss']
})
export class editArticalCategoryComponent {
  constructor(public router:Router) {}
  OnPressSubmit(){

    this.router.navigateByUrl('pages/artical-category/get-all-artical-category');
  }
}
