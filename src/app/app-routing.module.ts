import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'auth', loadChildren: './pages/auth/auth.module#authModule' },

  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'not-found',
     loadChildren: './pages/miscellaneous/miscellaneous.module#MiscellaneousModule',
   },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
