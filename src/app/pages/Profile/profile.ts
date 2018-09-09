import { Component } from '@angular/core';

@Component({
  selector: 'ngx-form-elements',
  templateUrl:'./profile.html',
  styleUrls:['./profile.scss']
})
export class profilePageComponent {
  showPasswordDiv:any=true;
  PasswordDiv:any=false;
  isReadOnly:any=true;
  Confirmpassword:any;
  data={
    userid:1,
    userName:'Eslam Sameh',
    FirstName:'Eslam',
    Age:'25',
    phone:'01148442784',
    email:'eslam.sameh1993@gmail.com',
    password:'123456789'
  }

  constructor() {}

  OnPressChangePassword(){
    this.showPasswordDiv=false;
    this.PasswordDiv=true;
    this.isReadOnly=false;
    this.data.password='';

  }
  OnPressCancel(){
    this.showPasswordDiv=true;
    this.PasswordDiv=false;
    this.isReadOnly=true;

  }
  OnPressSavePassword(){
    this.showPasswordDiv=true;
    this.PasswordDiv=false;
    this.isReadOnly=true;

  }
  OnPressSubmit(){

  }
}
