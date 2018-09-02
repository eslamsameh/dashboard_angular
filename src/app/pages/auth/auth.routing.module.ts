import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authComponent } from './auth';
import { LoginPageComponent } from './login/login';
import { RegisterPageComponent } from './register/register';



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
    path: 'register',
    component: RegisterPageComponent,
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
  RegisterPageComponent,

];
