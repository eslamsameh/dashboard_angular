import { Component } from '@angular/core';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import { Router } from '@angular/router';
import {selectComponent} from './select-users/select-user'

@Component({
  selector: 'ngx-manage-user-table',
  templateUrl: './get-all-users.html',
  styleUrls: ['./get-all-users.scss'],
})
export class GelAllUserPageComponent {
  data:any;
  OrginalData:any;
  childData:any=[];
  selectedItems =[];




    constructor(private service: SmartTableService,public router:Router) {
      this.data = this.service.getData();
      this.OrginalData=this.data;


    }


    OnPressEdit(idx,id){
      this.router.navigate(['/pages/ManageUser/manage-user/', id]);
    }
    onPressAdd(){
      this.router.navigateByUrl('/pages/products/add-new-product');
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
    searchByUserName(event){
      let newArray=[];
      let value =event.target.value.toUpperCase();
      for (let index = 0; index < this.data.length; index++) {

        if (this.data[index].username.toUpperCase().indexOf(value) > -1) {
         newArray.push(this.data[index])

        }

      }
      this.data=newArray;
      if(value==""||value==null){
        this.data=this.OrginalData;
      }

    }
    onPressSelect(id,i){
      if(this.selectedItems.indexOf(id)>-1){
        this.selectedItems.splice(i,1);
      }
      else{
        this.selectedItems.push(id);

      }

console.log(this.selectedItems)


    }
    eventHandler(event){
      this.childData.push(event);
      console.log(this.childData)
 }
 eventHand(event){
   for (let index = 0; index < this.childData.length; index++) {
     if(this.childData[index]==event){

      this.childData.splice(this.childData[index-1],1);
     }

   }

 }
  }
