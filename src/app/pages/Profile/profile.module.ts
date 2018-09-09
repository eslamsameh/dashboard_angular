import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { profilePageComponent } from './profile';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  component: profilePageComponent,
}]
@NgModule({
  imports: [
    ThemeModule,
    RouterModule.forChild(routes)

  ],
  declarations: [
   profilePageComponent
  ],

})
export class profileModule { }
