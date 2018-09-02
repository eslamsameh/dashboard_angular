import { NgModule } from '@angular/core';


import { authComponent } from './auth';
import { LoginPageComponent } from './login/login';
import { RegisterPageComponent } from './register/register';
import {RouterModule} from '@angular/router';
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
