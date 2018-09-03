import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children:[{
   path: 'products',
    loadChildren: './product/product.module#productsModule',
  },
  {
    path: 'ManageUser',
    loadChildren: './Manage users page/manageUser.module#manageUserModule',
  },
  {
    path: 'featureProducts',
     loadChildren: './Feature-Product/feature-produsts.module#featureProductsModule',
   },
   {
    path: 'category',
     loadChildren: './Category/category.module#categoryModule',
   },
   {
    path: 'artical-category',
     loadChildren: './ArticalCategory/atrical-category.module#ArticalcategoryModule',
   },
   {
     path:'artical',
     loadChildren:'./Articals/artical.module#ArticalsModule'

   }
]


  // children: [{
  //   path: 'dashboard',
  //   component: ECommerceComponent,
  // }, {
  //   path: 'iot-dashboard',
  //   component: DashboardComponent,
  // }, {
  //   path: 'ui-features',
  //   loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  // }, {
  //   path: 'components',
  //   loadChildren: './components/components.module#ComponentsModule',
  // }, {
  //   path: 'maps',
  //   loadChildren: './maps/maps.module#MapsModule',
  // }, {
  //   path: 'charts',
  //   loadChildren: './charts/charts.module#ChartsModule',
  // }, {
  //   path: 'editors',
  //   loadChildren: './editors/editors.module#EditorsModule',
  // }, {
  //   path: 'forms',
  //   loadChildren: './forms/forms.module#FormsModule',
  // }, {
  //   path: 'tables',
  //   loadChildren: './tables/tables.module#TablesModule',
  // }, {
  //   path: 'miscellaneous',
  //   loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  // }, {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // }, {
  //   path: '**',
  //   component: NotFoundComponent,
  // }],
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
