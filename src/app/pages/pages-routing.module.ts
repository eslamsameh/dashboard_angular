import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "products",
        loadChildren: "./product/product.module#productsModule"
      },
      {
        path: "ManageUser",
        loadChildren: "./Manage users page/manageUser.module#manageUserModule"
      },
      {
        path: "featureProducts",
        loadChildren:
          "./Feature-Product/feature-produsts.module#featureProductsModule"
      },
      {
        path: "category",
        loadChildren: "./Category/category.module#categoryModule"
      },
      {
        path: "artical-category",
        loadChildren:
          "./ArticalCategory/atrical-category.module#ArticalcategoryModule"
      },
      {
        path: "artical",
        loadChildren: "./Articals/artical.module#ArticalsModule"
      },
      {
        path: "manage-admin",
        loadChildren: "./Manage-Admins/manage-admin.module#ManageAdminsModule"
      },
      {
        path: "message-notification",
        loadChildren:
          "./message-notfication/message-notification.module#MessageAndNotificatiomModule"
      },
      {
        path: "profile",
        loadChildren: "./Profile/profile.module#profileModule"
      },
      {
        path: "main",
        loadChildren: "./Main-page/main-page.module#mainPageModule"
      },
      {
        path: "",
        redirectTo: "main",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
