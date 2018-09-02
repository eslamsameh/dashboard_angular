import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import {ActiveAndNoActiveComponent} from './actvie-nonActive/active-noActive'


@Component({
  selector: 'ngx-get-all-feature-product',
  templateUrl: './get-all-feature-products.html',
  styleUrls: ['./get-all-feature-products.scss'],
})
export class AllFeatureProductPageComponent {

  data:any;
  OrginalData:any;
  isActive:any=true;
  isnotActive:any;

  constructor(public router:Router,private service: SmartTableService) {
    this.data = this.service.getData();
    this.OrginalData=this.data;

  }
  OnPressDelete(id,productid){

    this.data.splice(id,1)
  }
  OnPressEdit(idx,productid){
    this.router.navigate(['/pages/featureProducts/edit-feature-product', productid]);
  }
  OnPressShow(idx,productid){

    this.router.navigate(['/pages/featureProducts/show-slide', productid]);
  }
  onPressAdd(){
    this.router.navigateByUrl('/pages/featureProducts/add-new-feature-product');
  }
  searchByProductName(event){
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

  onPressActive(i){
    debugger;
    this.isnotActive[i]=!this.isnotActive[i];
    this.isActive[i]=!this.isActive[i];
  }
}
