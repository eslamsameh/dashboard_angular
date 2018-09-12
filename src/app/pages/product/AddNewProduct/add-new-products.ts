import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-add-new-products",
  styleUrls: ["./add-new-products.scss"],
  templateUrl: "./add-new-products.html"
})
export class addNewProductComponent {
  SelectSub:any=false;
  image:string="https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg";
  visabilityUploadBtn:any=false;
  arrayOfImage=[];
  arrayOfImageDiscount=[];
  Upload_array_images:any=false;
  myRadio:any;
  from:any;
  to:any;
  OpenDate:any=false;
  AddForDiscout:any=false;
  Upload_array_images_discount:any=false;
  VisableUpload:any=true;
  editorDescription:any;
  constructor(public router: Router) {}

  OnPressSubmit() {
    this.router.navigateByUrl("/pages/products/get-all-products");
  }

  OnChangeSelectCategory(e){
    let ValueSelected=e.target.value;
    if(ValueSelected =="Rug"){this.SelectSub=true;} else{this.SelectSub=false;}
  }
  ReadUrl(event){
    this.image=event.target.files;
    let reader = new FileReader();
    reader.onload = (e: any) => {this.image = e.target.result;}
    reader.readAsDataURL(event.target.files[0]);
    this.visabilityUploadBtn=true;
    this.VisableUpload=false;
  }
  UploadMainImage(){
    this.visabilityUploadBtn=false;
  }
  CancelMainImage(){
    this.image="https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg";
    this.visabilityUploadBtn=false;
    this.VisableUpload=true;
  }

  ReadUrlSub(event){
    let reader = new FileReader();
    reader.onload = (e: any) => {this.arrayOfImage.push(e.target.result);}
    reader.readAsDataURL(event.target.files[0]);
    this.Upload_array_images=true;
  }
  UploadSubImages(){
    this.Upload_array_images=false;
  }
  OnChaneg(event){
    if (this.myRadio == "Yes")
    {this.OpenDate = true; this.AddForDiscout=true}
    else {this.OpenDate = false;
       this.AddForDiscout=false;
       this.arrayOfImageDiscount=[];
       this.Upload_array_images_discount=false;
       }
  }
  ReadUrlDiscountImages(event){
    let reader = new FileReader();
    reader.onload = (e: any) => {this.arrayOfImageDiscount.push(e.target.result);}
    reader.readAsDataURL(event.target.files[0]);
    this.Upload_array_images_discount=true;

  }
  UploadDiscountImages(){
    this.Upload_array_images_discount=false;
  }
  OnPressRemoveImageSub(i){
    this.arrayOfImage.splice(i,1);
    if(this.arrayOfImage.length==0){this.Upload_array_images=false;} else{this.Upload_array_images=true};
  }
  OnPressRemoveImageDiscount(i){
this.arrayOfImageDiscount.splice(i,1);
if(this.arrayOfImageDiscount.length==0)
{this.Upload_array_images_discount=false;}
else{this.Upload_array_images_discount=true;}
  }
}
