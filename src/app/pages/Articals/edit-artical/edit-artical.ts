import { Component } from '@angular/core';
import { ArticalTagesService } from '../../../@core/data/ArticalTags.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-edit-artical',
  templateUrl :'./edit-artical.html',
  styleUrls: ['./edit-artical.scss']
})
export class EditArticalComponent {
  data: any;
  OrignalData: any;
  filteredItems: any;
  selectedArticle: any;
  FilterItemsShowInSearch: any = false;
  index: any = 0;
  itemTagUserSelected = [];
  VisablityOfSelectedTagUser: any = false;
  VisableUpload:any=false;
  imageUpload:string="https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg";
  ArticalData={
    ArticalTag:[
      {
        id:1,
        ArticalTag:"Mark"
      },
      {
        id:2,
        ArticalTag:"Jacob"
      },
      {
        id:3,
        ArticalTag:"Larry"
      },
      {
        id:4,
        ArticalTag:"Jack"
      }
    ],
    id:1,
    artical_title:"eslam",
    selectedCategory:"Rug",
    selectedSubCategory:"",
    Artical_discreption:"lkajsd;lashkjdl;asjhdjaslkhdkjasklddjhaslkdljas;dkjas",
    artical_image:"https://image.ibb.co/dxrkHT/category3.jpg",

  }
  visabilityUploadBtn: boolean;


  constructor(public service: ArticalTagesService, public router: Router) {
    this.data = this.service.getData();
    this.selectedArticle = this.data[0];
    this.OrignalData = this.data;
    if(this.ArticalData.selectedSubCategory==""){
      this.ArticalData.selectedSubCategory="Select SubCategory"
    }
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
    this.ArticalData.ArticalTag.splice(idx, 1);
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
    this.ArticalData.ArticalTag.push(this.selectedArticle[0]);
    this.VisablityOfSelectedTagUser = true;
  }
  ReadUrl(event){
    this.ArticalData.artical_image=event.target.files;
    let reader = new FileReader();
    reader.onload = (e: any) => {this.ArticalData.artical_image = e.target.result;}
    reader.readAsDataURL(event.target.files[0]);
    this.visabilityUploadBtn=true;
    this.VisableUpload=false;

  }
  UploadMainImage(){
    this.visabilityUploadBtn=false;
  }
  CancelMainImage(){
    this.ArticalData.artical_image="",
    this.visabilityUploadBtn=false;
    this.VisableUpload=true;
  }
  OnPressRemoveMainImage(){
this.ArticalData.artical_image="";
this.visabilityUploadBtn=false;
this.VisableUpload=true;
  }
}
