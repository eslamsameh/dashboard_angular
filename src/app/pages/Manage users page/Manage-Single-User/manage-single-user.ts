import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-manage-user',
  styleUrls: ['./manage-single-user.scss'],
  templateUrl: './manage-single-user.html',
})
export class ManageUserComponent {
  age:any="25";
  LastLoginDate:any="9/3/2018";
  userPhone:any="01148442784";
  userEmail:any="Eslam@123.com";
  userName:any="Eslam Sameh";
  info:any="msh 3aref"


constructor(public router:Router) {
}
OnPressSaveChanges(){
  this.router.navigateByUrl("/pages/ManageUser/get-all-users");
}

}

