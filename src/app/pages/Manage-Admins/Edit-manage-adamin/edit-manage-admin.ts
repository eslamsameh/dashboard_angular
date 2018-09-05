import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-form-elements',
  templateUrl:'./edit-manage-admin.html',
  styleUrls:['./edit-manage-admin.scss']
})
export class EditManageAdminComponent {
  constructor(public router:Router) {
  }
  OnPressSubmit(){
    this.router.navigateByUrl('/pages/manage-admin/get-all-manage-admins');
  }
}
