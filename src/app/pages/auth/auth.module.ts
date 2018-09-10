import { NgModule } from '@angular/core';



import {ThemeModule} from '../../@theme/theme.module';
import {authRoutnigModule,routedComponents} from './auth.routing.module';




@NgModule({
  imports: [
    ThemeModule,
    authRoutnigModule
  ],
  declarations: [
   ...routedComponents
  ],

})
export class authModule { }
