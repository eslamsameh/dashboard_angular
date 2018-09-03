import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {ArticalCategoryRoutnigModule,routedComponents} from './aritcal-category-routing.module';

import { categoryService } from '../../@core/data/category.service';

@NgModule({
  imports: [
    ThemeModule,
    ArticalCategoryRoutnigModule,

  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    categoryService,
  ],
})
export class ArticalcategoryModule {}
