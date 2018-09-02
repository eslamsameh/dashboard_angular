import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GelAllUserPageComponent} from './Get-all-user/get-all-user';
import {ManageUserComponent} from './Manage-Single-User/manage-single-user';
import {UserComponent} from './User';
import {selectComponent} from './Get-all-user/select-users/select-user'
import { allSuspendedUserPage } from './all-suspended-users/all-suspended-users';
const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [{

    path: 'manage-user/:Userid',
    component:ManageUserComponent ,
  }, {
    path: 'get-all-users',
    component: GelAllUserPageComponent,
  },
  {
    path: 'all-suspended-users',
    component: allSuspendedUserPage,
  },
  {
    redirectTo:'get-all-users',
    pathMatch: 'full',
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
export class manageUserRoutnigModule {

}

export const routedComponents = [
 ManageUserComponent,
 GelAllUserPageComponent,
 UserComponent,
 selectComponent,
 allSuspendedUserPage
];
