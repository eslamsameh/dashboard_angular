import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'ngx-active-nonActive',
  templateUrl: './active-nonActive.html',
  styles: ['./active-nonActive.scss'],
})
export class ActiveAndNoActiveComponent {
  @Input() DataSource: any;
  active:any=true;
  
  constructor(public router:Router) {}

  Active(id){
this.active=!this.active
  }
}
