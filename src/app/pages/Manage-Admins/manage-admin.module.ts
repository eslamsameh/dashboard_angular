import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {ManageAdminRoutnigModule,routedComponents} from './manage-admin-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {adminUsersSservices} from '../../@core/data/admin-users.service';


@NgModule({
  imports: [
    ThemeModule,
    ManageAdminRoutnigModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    adminUsersSservices
  ],
})
export class ManageAdminsModule { }
