import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {SmartTableService} from '../../../@core/data/smart-table.service';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile';



@Component({
  selector: "ngx-add-new-feature-product",
  templateUrl: "./add-new-feature-products.html",
  styleUrls: ["./add-new-feature-product.scss"]
})
export class addNewFeatureProductPage {
  iscategory: any = false;
  sliderId:any=1;
  data=[];
  OrginalData=[];
  SliderName:any;
  choosenCategory:any;
  choosenSliderFor:any;
  AddedItems=[];
  SelectAll:boolean=true;
  currentTheme: string;
  private alive = true;
constructor(public router:Router , public service:SmartTableService ,public themeService: NbThemeService) {
 this.data= this.service.getData();
 this.OrginalData=this.data
 this.themeService.getJsTheme()
 .pipe(takeWhile(() => this.alive))
 .subscribe(theme => {
   this.currentTheme = theme.name;


});
}

select(event) {
  this.choosenSliderFor = event.target.value;
  if (this.choosenSliderFor == "Category") {this.iscategory = true;} else {this.iscategory = false;}
}
searchByProductName(event) {
  this.data=this.OrginalData;
  let newArray = [];
  let value = event.target.value.toUpperCase();
  for (let index = 0; index < this.data.length; index++) {
    if (this.data[index].firstName.toUpperCase().indexOf(value) > -1)
          { newArray.push(this.data[index]);}
  }
  this.data = newArray;
  if (value == "" || value == null) {this.data = this.OrginalData;}
}
OnPressDelete(i){
  this.data.splice(i,1);
}
OnPressEdit(id,i){
this.router.navigate(['/pages/products/edit-product/',id,this.sliderId]);
}
OnPressOk(){
  let data={
   sliderName:this.SliderName,
   sliderFor:this.choosenSliderFor,
   sliderCategory:this.choosenCategory
  }

  this.data.push(data);
   this.OrginalData=this.data;

}

OnchangeSelectedCategory(e){
 this.choosenCategory=e.target.value;
}


OnPressAdd(id,i){
    let data={
      id:id,
      sliderName:this.SliderName,
      sliderFor:this.choosenSliderFor,
      sliderCategory:this.choosenCategory
     }
     this.AddedItems.push(data);
console.log(this.AddedItems);
}
}
