import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-edit-products',
  styleUrls: ['./edit-produuct.scss'],
  templateUrl: './edit-product.html',
})
export class editProduct {
   data={
    id:1,
    productName:"rokna",
    productPrice:"989787",
    is_discount:"Yes",
    category:"Rug",
    subCategory:"SubCategory1",
    startDate:'2018-10-10',
    endDate:'2018-12-12',
    productStatus:"Active",
    productQuantity:"987",
    productDiscription:"ay7agaay7agaay7agaay7agaay7agaay7agaay7agaay7agaay7agaay7agaay7aga",
    discountPercentage:"10",
    priceAfterDiscount:"98977",
    amountOfOfferedItems:'897',
    mainImage:'https://image.ibb.co/dxrkHT/category3.jpg',
    subImages:[
      'https://image.ibb.co/bB8Aj8/category6.jpg',
      'https://image.ibb.co/b7Hgro/cataloge1.jpg',
      'https://image.ibb.co/cLoXxT/category5.jpg'
    ],
    discountImages:[
      'https://image.ibb.co/bB8Aj8/category6.jpg',
      'https://image.ibb.co/b7Hgro/cataloge1.jpg',
      'https://image.ibb.co/cLoXxT/category5.jpg'
    ],
    sliderImage:[

    ]
  }
  SelectSub:any=false;
  AddForDiscout:any=false;
  OpenDate:any=false;
  arrayOfImageDiscount=[];
  Upload_array_images_discount:any=false;
  VisableUpload:any=true;
  visabilityUploadBtn:any=false;
  image:string="https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg";
  Upload_array_images:any=false;
  param:any;
  HasSlider:any=false;
  Upload_array_slider_images:any=false;

constructor(public router:Router, public activatedRoute: ActivatedRoute) {
  this.activatedRoute.params.subscribe(params => {
   if(params['sliderId'] != 0){
     this.HasSlider=true;
   }
   else{
     this.HasSlider=false;
   }
  });
  if(this.data.category=="Rug"){this.SelectSub=true;}else{this.SelectSub=false;}
setTimeout(() => {
  if (this.data.is_discount == "Yes")
  {this.OpenDate = true; this.AddForDiscout=true}
  else {this.OpenDate = false;
     this.AddForDiscout=false;
     this.Upload_array_images_discount=false;
     }
}, 100);
if(this.data.mainImage){ this.VisableUpload=false;} else{this.VisableUpload=true;}

}
  OnPressSubmit(){
    this.router.navigateByUrl('/pages/products/get-all-products');
  }
  OnChangeSelectCategory(event){
    let ValueSelected=event.target.value;
    if(ValueSelected =="Rug"){this.SelectSub=true;} else{this.SelectSub=false;}
  }
  OnChaneg(event){
    if (this.data.is_discount == "Yes")
    {this.OpenDate = true; this.AddForDiscout=true}
    else {this.OpenDate = false;
       this.AddForDiscout=false;
       this.data.discountImages=[];
       this.Upload_array_images_discount=false;
       }
  }
  ReadUrl(event){
    this.data.mainImage=event.target.files;
    let reader = new FileReader();
    reader.onload = (e: any) => {this.data.mainImage = e.target.result;}
    reader.readAsDataURL(event.target.files[0]);
    this.visabilityUploadBtn=true;
    this.VisableUpload=false;
  }
  OnPressRemoveMainImage(){
    this.data.mainImage='';
    this.VisableUpload=true;
  }
  UploadMainImage(){
    this.visabilityUploadBtn=false;
  }
  CancelMainImage(){
    this.data.mainImage='';
    this.visabilityUploadBtn=false;
    this.VisableUpload=true;
  }
  UploadDiscountImages(){
    this.Upload_array_images_discount=false;
  }
  OnPressRemoveImageDiscount(i){
    if(this.data.discountImages.length==1){
      this.data.discountImages.splice(i,1);
      this.Upload_array_images_discount=false
    }else{
      this.data.discountImages.splice(i,1);
    }
 }
  ReadUrlDiscountImages(event){
    let reader = new FileReader();
    reader.onload = (e: any) => {this.data.discountImages.push(e.target.result);}
    reader.readAsDataURL(event.target.files[0]);
    this.Upload_array_images_discount=true;
  }
  ReadUrlSlider(event){
    let reader = new FileReader();
    reader.onload = (e: any) => {this.data.sliderImage.push(e.target.result);}
    reader.readAsDataURL(event.target.files[0]);
    this.Upload_array_slider_images=true;
  }
  OnPressRemoveImageSliderImage(i){

    if(this.data.sliderImage.length==1){
      this.data.sliderImage.splice(i,1);
      this.Upload_array_slider_images=false;
    }
    else{
      this.data.sliderImage.splice(i,1);
    }
  }
  UploadSliderImages(){
    this.Upload_array_slider_images=false;
  }
  UploadSubImages(){
    this.Upload_array_images=false;
  }
  OnPressRemoveImageSub(i){
    if(this.data.subImages.length==1){
      this.data.subImages.splice(i,1);
      this.Upload_array_images=false;
    }
    else{
      this.data.subImages.splice(i,1);
    }
  }
  ReadUrlSub(event){
    let reader = new FileReader();
    reader.onload = (e: any) => {this.data.subImages.push(e.target.result);}
    reader.readAsDataURL(event.target.files[0]);
    this.Upload_array_images=true;
  }
  OnPressDownloadPDF(){}
  OnPressViewPDF(){}
}

