import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { featureProductPage } from './feature-products';
import { addNewFeatureProductPage } from './add-new-feature-product/add-new-feature-product';
import { AllFeatureProductPageComponent } from './get-all-product-feature/get-all-feature-product';
import { editFeatureProduct } from './edit-feature-product/edit-feature-product';
import { showSlidePage } from './Show Slide/show-slide';

const routes: Routes = [{
  path: '',
  component: featureProductPage,
  children: [{
    path: 'add-new-feature-product',
    component:addNewFeatureProductPage ,
  }, {
    path: 'get-all-feature-products',
    component: AllFeatureProductPageComponent,
  },
  {
    path: 'edit-feature-product/:featureid',
    component: editFeatureProduct,
  }
  ,
  {
    path: 'show-slide/:featureid',
    component: showSlidePage,
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
export class FeatureProductRoutnigModule {

}

export const routedComponents = [
 featureProductPage,
 addNewFeatureProductPage,
 AllFeatureProductPageComponent,
 editFeatureProduct,
 showSlidePage
];
