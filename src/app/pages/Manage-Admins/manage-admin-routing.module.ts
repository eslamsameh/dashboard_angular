import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { manageAdminComponent } from './manage-admins';
import { AddNewAdminComponent } from './add-new-admin/add-new-admin';
import { AllManageAdminsComponent } from './all-mange-admins/all-manage-admins';
import { EditManageAdminComponent } from './Edit-manage-adamin/edit-manage-admin';



const routes: Routes = [{
  path: '',
  component: manageAdminComponent,
  children: [{
    path: 'add-new-admin',
    component: AddNewAdminComponent,
  }, {
    path: 'get-all-manage-admins',
    component: AllManageAdminsComponent,
  },
  {
    path: 'edit-manage-admin/:id',
    component: EditManageAdminComponent,
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
export class ManageAdminRoutnigModule {

}

export const routedComponents = [
  manageAdminComponent,
  AddNewAdminComponent,
  AllManageAdminsComponent,
  EditManageAdminComponent
];
