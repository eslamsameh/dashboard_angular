import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'ngx-select-comp',
  templateUrl: './select-user.html',
  styleUrls: ['./select-user.scss'],
})
export class selectComponent {
  suspendsArray:any=[];
  @Input() DataSource: any;
  @Output() data: EventEmitter<number[]> = new EventEmitter<number[]>();
  @Output() dataRemove: EventEmitter<number[]> = new EventEmitter<number[]>();
    is_suspend:any=true;
    myRadio:any;
    OpenDate:any=false;
    from:any;
    to:any;

  constructor(public router:Router) {}
  OnPressSuspend(id){


if(this.is_suspend==false){
    this.data.emit(id);
    this.is_suspend=!this.is_suspend;

}
else{
  this.dataRemove.emit(id)

}
}
OnChaneg(event){


  if(this.myRadio=="Date"){;
    this.OpenDate=true;
  }
  else{
    this.OpenDate=false;
  }

}
OnPressOk(){
  this.is_suspend=!this.is_suspend;
}
}
