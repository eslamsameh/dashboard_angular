import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {ArticalsRoutnigModule,routedComponents} from './artical-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    ThemeModule,
    ArticalsRoutnigModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
  ],
})
export class ArticalsModule { }
