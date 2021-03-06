import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-form-elements",
  templateUrl: "./add-new-category.html",
  styleUrls: ["./add-new-category.scss"]
})
export class addNewCategoryPage {
  imageUpload:string="https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg";
  VisableUpload:any=true;
  visabilityUploadBtn: boolean=false;
  haveParentCategory:any=false;
  myRadio:any;
  editorDescription:any;
  image:any
  constructor(public router: Router) {}
  OnPressSubmit() {
    this.router.navigateByUrl("pages/category/get-all-category");
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
    this.image="";
    this.imageUpload="https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg";
    this.visabilityUploadBtn=false;
    this.VisableUpload=true;
  }
  OnChaneg(event){
    if(this.myRadio=="Yes"){this.haveParentCategory=true} else{this.haveParentCategory=false};
  }
}
