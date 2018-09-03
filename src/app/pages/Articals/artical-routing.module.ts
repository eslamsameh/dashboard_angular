import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ArticalComponent} from './artical';
import {addNewArticalComponent} from '../Articals/add-new-artical/add-new-artical';
import {GetAllArticalComponent} from '../Articals/get-all-artical/get-all-artical';
import {EditArticalComponent} from '../Articals/edit-artical/edit-artical';
const routes: Routes = [{
  path: '',
  component: ArticalComponent,
  children: [{
    path: 'add-new-artical',
    component: addNewArticalComponent,
  }, {
    path: 'get-all-articals',
    component: GetAllArticalComponent,
  },
  {
    path: 'edit-artical/:id',
    component: EditArticalComponent,
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
export class ArticalsRoutnigModule {

}

export const routedComponents = [
  ArticalComponent,
  addNewArticalComponent,
  GetAllArticalComponent,
  EditArticalComponent

];
