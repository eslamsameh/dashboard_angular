import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';


@Component({
  selector: 'ngx-send-code',
  templateUrl: './send-code.html',
  styleUrls: ['./send-code.scss'],
})
export class SendCodePageComponent {

  constructor(public  router:Router) {


  }

  OnPressBack(){
    this.router.navigateByUrl("/auth/login")
  }
  OnPressSend(){
    this.router.navigateByUrl("auth/Confirm-Password")
  }
  OnPressResendViaPhone(){}
  OnPressResendViaEmail(){}

}
