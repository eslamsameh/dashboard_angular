import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {addNewProductComponent} from '../product/AddNewProduct/add-new-products'
import {productComponent} from './product';
import {allproductsComponent} from '../product/AllProducts/all-products'
import { editProduct } from './edit-product/edit-product';

const routes: Routes = [{
  path: '',
  component: productComponent,
  children: [{
    path: 'add-new-product',
    component: addNewProductComponent,
  }, {
    path: 'get-all-products',
    component: allproductsComponent,
  },
  {
    path: 'edit-product/:productid',
    component: editProduct,
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
export class productsRoutnigModule {

}

export const routedComponents = [
  productComponent,
  addNewProductComponent,
  allproductsComponent,
  editProduct
];
