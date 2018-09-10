import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authComponent } from './auth';
import { LoginPageComponent } from './login/login';
import { SendCodePageComponent } from './Send Code/send-code';
import { ConfirmPasswordPageComponent } from './Confirm Password/confirm-password';



const routes: Routes = [{
  path: '',
  component:authComponent,
  children: [
    {
      path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    },
    {

    path: 'login',
    component:LoginPageComponent,
  }, {
    path: 'Send-Code',
    component: SendCodePageComponent,
  },
  {
    path: 'Confirm-Password',
    component: ConfirmPasswordPageComponent,
  },

],

}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class authRoutnigModule {

}

export const routedComponents = [
  authComponent,
  LoginPageComponent,
  SendCodePageComponent,
  ConfirmPasswordPageComponent

];
