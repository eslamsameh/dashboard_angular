import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

  constructor(public router:Router) {
  }

  goToHome() {
    this.router.navigateByUrl('/pages')
  }
}