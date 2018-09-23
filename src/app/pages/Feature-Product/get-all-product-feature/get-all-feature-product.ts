import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SmartTableService } from "../../../@core/data/smart-table.service";
import { ActiveAndNoActiveComponent } from "./actvie-nonActive/active-noActive";
import { NbThemeService } from "@nebular/theme";
import { takeWhile } from "rxjs/operators";

@Component({
  selector: "ngx-get-all-feature-product",
  templateUrl: "./get-all-feature-products.html",
  styleUrls: ["./get-all-feature-products.scss"]
})
export class AllFeatureProductPageComponent {
  iscategory: any = false;
  flag:any=true;
  data=[
    {
      sliderName:"____________________"
    }
  ];
  OrginalData=[];
  SliderName:any;
  choosenCategory:any;
  choosenSliderFor:any;
  currentTheme: string;
  alive=true;

constructor(public router:Router,public themeService: NbThemeService) {
  this.themeService.getJsTheme()
  .pipe(takeWhile(() => this.alive))
  .subscribe(theme => {
    this.currentTheme = theme.name;


 });
}


searchByProductName(event) {
  let newArray = [];
  let value = event.target.value.toUpperCase();
  for (let index = 0; index < this.data.length; index++) {
    if (this.data[index].sliderName.toUpperCase().indexOf(value) > -1)
          { newArray.push(this.data[index]);}
  }
  this.data = newArray;
  if (value == "" || value == null) {this.data = this.OrginalData;}
}
OnPressDelete(i){
  this.data.splice(i,1);
  if(this.data.length==0){
    this.data=[
      {
        sliderName:"____________________"
      }
    ];
  }

}
OnPressEdit(i,id){

}


  OnPressAdd(){
    this.router.navigateByUrl("/pages/featureProducts/add-new-feature-product");
  }
}
