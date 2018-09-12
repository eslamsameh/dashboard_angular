import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-form-elements',
  templateUrl:'./edit-category.html',
  styleUrls:['./edit-category.scss']
})
export class EditCategoryComponent {
  data={
    id:1,
    categoryName:"fearnuture",
    is_have_parent:"Yes",
    categoryIcon:"nb-close",
    ParentCategoryName:"Rug",
    image:'https://image.ibb.co/bB8Aj8/category6.jpg',
    categoryDiscreption:"eslamjklasdhkjalsjdhkaslkdhkasjdlashk"
  }
  haveParentCategory:boolean;
  visabilityUploadBtn: boolean=false;
  VisableUpload: boolean=false;
  imageUpload: string="https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg";


  constructor(public router:Router) {
  setTimeout(() => {
    if(this.data.is_have_parent=="Yes"){this.haveParentCategory=true}else{this.haveParentCategory=false};
  }, 100);
  }
  OnPressSubmit(){
    this.router.navigateByUrl('pages/category/get-all-category');
  }
  OnChaneg(event){
if(this.data.is_have_parent=="Yes"){this.haveParentCategory=true}else{this.haveParentCategory=false}
  }
  ReadUrl(event){
    this.data.image=event.target.files;
    let reader = new FileReader();
    reader.onload = (e: any) => {this.data.image = e.target.result;}
    reader.readAsDataURL(event.target.files[0]);
    this.visabilityUploadBtn=true;
    this.VisableUpload=false;

  }
  UploadMainImage(){
    this.visabilityUploadBtn=false;
  }
  CancelMainImage(){
    this.data.image="",
    this.visabilityUploadBtn=false;
    this.VisableUpload=true;
  }
  OnPressRemoveMainImage(){
this.data.image="",
this.visabilityUploadBtn=false;
this.VisableUpload=true;
  }

}
