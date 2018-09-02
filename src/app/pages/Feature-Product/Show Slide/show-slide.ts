import { Component } from '@angular/core';
import {Router} from '@angular/router';

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

constructor(public router:Router) {
  this.imageShow=this.imagesSlider[0];
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
}


