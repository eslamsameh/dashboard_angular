import { Component } from "@angular/core";
import { ArticalTagesService } from "../../../@core/data/ArticalTags.service";
import { Router } from "@angular/router";

@Component({
  selector: "ngx-add-new-artical",
  templateUrl: "./add-new-artical.html",
  styleUrls: ["./add-new-artical.scss"]
})
export class addNewArticalComponent {
  data: any;
  OrignalData: any;
  filteredItems: any;
  selectedArticle: any;
  FilterItemsShowInSearch: any = false;
  index: any = 0;
  itemTagUserSelected = [];
  VisablityOfSelectedTagUser: any = false;
  imageUpload:string="https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg";
  VisableUpload:any=true;
  visabilityUploadBtn: boolean=false;
  haveParentCategory:any=false;
  myRadio:any;
  editorDescription:any;
  image:any

  constructor(public service: ArticalTagesService, public router: Router) {
    this.data = this.service.getData();
    this.selectedArticle = this.data[0];
    this.OrignalData = this.data;
  }
  filter(event) {
    let filterItems = [];
    let s = event.target.value.toUpperCase();
    if (s !== "") {
      this.FilterItemsShowInSearch = true;
      for (let index = 0; index < this.data.length; index++) {
        if (this.data[index].ArticalTag.toUpperCase().indexOf(s) > -1) {
          filterItems.push(this.data[index]);
        }
      }
      this.data = filterItems;
    } else {
      this.FilterItemsShowInSearch = false;
      this.data = this.OrignalData;
    }
  }

  OnPressArticalSelectTag(idx) {
    this.itemTagUserSelected.splice(idx, 1);
  }

  OnPressSaveDerft() {
    this.router.navigateByUrl("/pages/artical/get-all-articals");
  }

  OnPressSave() {
    this.router.navigateByUrl("/pages/artical/get-all-articals");
  }

  OnMoveDown() {
    document.getElementById("sel1").focus();
  }

  select($event) {
    console.log(this.selectedArticle);
    this.itemTagUserSelected.push(this.selectedArticle[0]);
    this.VisablityOfSelectedTagUser = true;
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
}
