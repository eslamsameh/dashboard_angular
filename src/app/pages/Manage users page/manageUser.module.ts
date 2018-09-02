import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import {SmartTableService} from '../../@core/data/smart-table.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {routedComponents,manageUserRoutnigModule} from './manageUser-Routing.module'

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    manageUserRoutnigModule


  ],
  declarations: [
   ...routedComponents

  ],
  providers: [
    SmartTableService
  ],

})
export class manageUserModule { }
