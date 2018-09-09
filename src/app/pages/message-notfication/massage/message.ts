import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {adminUsersSservices} from '../../../@core/data/admin-users.service';

@Component({
  selector: 'ngx-message-comp',
 templateUrl:'./message.html',
 styleUrls:['./message.scss']
})
export class messageComponent {

data:any;
OrginalData:any;
messageConent:string="i will make story with you :D";
userName:string="Eslam Sameh";
useridMessage:any;
MessageTitel:string="elslamo 3laikkom";

  constructor(private service: adminUsersSservices,public router:Router) {
    this.data = this.service.getData();
    this.OrginalData=this.data;


  }

  OnPressDelete(i,id){

    this.data.splice(i,1)
  }
  OnPressShowMessage(idx,id){

   this.useridMessage=id;
   this.router.navigate(['/pages/message-notification/all-single-message/', id]);
  }

  searchByFirstName(event){
    let newArray=[];
let value =event.target.value.toUpperCase();
for (let index = 0; index < this.data.length; index++) {
  if (this.data[index].firstName.toUpperCase().indexOf(value) > -1) {
   newArray.push(this.data[index])
  }
}
this.data=newArray;
if(value==""||value==null){
  this.data=this.OrginalData;
}
  }

  searchByLastName(event){
    let newArray=[];
    let value =event.target.value.toUpperCase();
    for (let index = 0; index < this.data.length; index++) {

      if (this.data[index].lastName.toUpperCase().indexOf(value) > -1) {
       newArray.push(this.data[index])
      }
    }
    this.data=newArray;
    if(value==""||value==null){
      this.data=this.OrginalData;
    }

  }
  searchByEmail(event){
    let newArray=[];
    let value =event.target.value.toUpperCase();
    for (let index = 0; index < this.data.length; index++) {

      if (this.data[index].email.toUpperCase().indexOf(value) > -1) {
       newArray.push(this.data[index])

      }

    }
    this.data=newArray;
    if(value==""||value==null){
      this.data=this.OrginalData;
    }

  }
  OnPressOk(){

  }
}


