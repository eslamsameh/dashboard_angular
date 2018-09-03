import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category';
import { addNewCategoryPage } from './add-new-category/add-new-category';
import { allCategoryPage } from './all-category/all-category';
import { EditCategoryComponent } from './edit-category/edit-category';

const routes: Routes = [{
  path: '',
  component: CategoryComponent,
  children: [{
    path: 'add-new-category',
    component: addNewCategoryPage,
  }, {
    path: 'get-all-category',
    component: allCategoryPage,
  },
  {
    path: 'edit-category/:categoryid',
    component: EditCategoryComponent,
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
export class CategoryRoutnigModule {

}

export const routedComponents = [
 allCategoryPage,
 EditCategoryComponent,
 addNewCategoryPage,
 CategoryComponent
];
