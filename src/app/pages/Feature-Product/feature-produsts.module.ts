import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import {FeatureProductRoutnigModule,routedComponents} from './feature-products-routing.module';
import { ActiveAndNoActiveComponent } from './get-all-product-feature/actvie-nonActive/active-noActive';

@NgModule({
  imports: [
    ThemeModule,
    FeatureProductRoutnigModule,

  ],
  declarations: [
    ...routedComponents,
    ActiveAndNoActiveComponent
  ],

})
export class featureProductsModule { }
