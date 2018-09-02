import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import {SmartTableService} from '../../@core/data/smart-table.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Routes, RouterModule } from '@angular/router';
import { ManageUserPageComponent } from './Get-all-user/manageUserPage';
const routes: Routes = [{
  path: '',
  component: ManageUserPageComponent

}];


@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    RouterModule.forChild(routes),

  ],
  declarations: [
    ManageUserPageComponent

  ],
  providers: [
    SmartTableService
  ],
  entryComponents:[
    ManageUserPageComponent
  ]
})
export class manageUserModule { }
