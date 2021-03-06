import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {productsRoutnigModule,routedComponents} from './products-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
  imports: [
    ThemeModule,
    productsRoutnigModule,
    Ng2SmartTableModule,
    CKEditorModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
  ],
})
export class productsModule { }
