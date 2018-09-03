import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {CategoryRoutnigModule,routedComponents} from './category-routing.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { categoryService } from '../../@core/data/category.service';

@NgModule({
  imports: [
    ThemeModule,
    CategoryRoutnigModule,
     Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    categoryService,
  ],
})
export class categoryModule {}
