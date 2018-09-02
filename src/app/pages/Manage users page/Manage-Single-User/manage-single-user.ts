import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-manage-user',
  styleUrls: ['./manage-single-user.scss'],
  templateUrl: './manage-single-user.html',
})
export class ManageUserComponent {
  starRate = 2;
  heartRate = 4;
constructor(public router:Router) {


}

  OnPressSubmit(){
    this.router.navigateByUrl('/pages/ManageUser');
  }
}

