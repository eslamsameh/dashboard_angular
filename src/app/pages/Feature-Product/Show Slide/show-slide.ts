import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { SmartTableService } from '../../../@core/data/smart-table.service';


@Component({
  selector: 'ngx-show-slide',
  styleUrls: ['./show-slide.scss'],
  templateUrl: './show-slide.html',
})
export class showSlidePage {
  imagesSlider=[
    "https://image.ibb.co/eJuOST/article.jpg",
    "https://image.ibb.co/dxrkHT/category3.jpg",
    "https://preview.ibb.co/mQgVP8/singleproduct.jpg",
    "https://image.ibb.co/cLoXxT/category5.jpg"
  ]
  imageShow:any;
  File:any;
  Visable:any=false;
  data:any;
  OrignalData:any;
  theDataAdd:any=[];
  dataPushed:any=false;


constructor(public router:Router , public service:SmartTableService) {
  this.imageShow=this.imagesSlider[0];
  this.data=this.service.getData();
  this.OrignalData=this.data;


}

  OnPressSubmit(){
    this.router.navigateByUrl('/pages/featureProducts/get-all-feature-products');
  }
  OnPressShowImage(i){
    this.imageShow=this.imagesSlider[i];
  }
  OnPressDeleteImage(i){

    if(this.imageShow==this.imagesSlider[i]){
      var last = this.imagesSlider.length-1;
      if (this.imageShow==this.imagesSlider[last]) {
        this.imagesSlider.splice(i,1);
        this.imageShow=this.imagesSlider[i-1];
      }
      else {

        this.imagesSlider.splice(i,1);
        this.imageShow=this.imagesSlider[i];
      }

         }
    else{
      this.imagesSlider.splice(i,1);
    }
  }
  UploadPhoto(){

  }
  OnChangeFile(event){
  this.File=event.target.files;
  }
  searchByProductName(event){
    let newArray=[];
let value =event.target.value.toUpperCase();
for (let index = 0; index < this.data.length; index++) {
  if (this.data[index].firstName.toUpperCase().indexOf(value) > -1) {
   newArray.push(this.data[index])
  }
  this.Visable=true;
}
this.data=newArray;
if(value==""||value==null){
  this.data=this.OrignalData;
  this.Visable=false;
}

  }
  OnPressDown(){
document.getElementById("sel1").focus();
  }
  OnPressEnter(d){
    debugger
  }
  select(event){
    console.log(event.target.id);
    let x=event.target.value;
    this.theDataAdd.push(x);
   this.dataPushed=true;

  }
  OnPressDeleteDataPushed(i){
    this.theDataAdd.splice(i,1);
  }
}


