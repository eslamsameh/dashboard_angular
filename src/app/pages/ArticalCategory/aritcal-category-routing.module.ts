import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { articalCategoryComponent } from './artical-category';
import { AddNewArticalCategoryComponent } from './add-new-artical-category/add-new-artical-category';
import { AllArticalCategoryComponent } from './all-artical-category/all-artical-category';
import { editArticalCategoryComponent } from './edit-artical-category/edit-artical-category';

const routes: Routes = [{
  path: '',
  component: articalCategoryComponent,
  children: [{
    path: 'add-new-artical-category',
    component: AddNewArticalCategoryComponent,
  }, {
    path: 'get-all-artical-category',
    component: AllArticalCategoryComponent,
  },
  {
    path: 'edit-artical-category/:categoryid',
    component: editArticalCategoryComponent,
  }
],

}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ArticalCategoryRoutnigModule {

}

export const routedComponents = [
  articalCategoryComponent,
  AddNewArticalCategoryComponent,
  AllArticalCategoryComponent,
  editArticalCategoryComponent

];
