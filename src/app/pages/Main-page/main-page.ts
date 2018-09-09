import { Component } from '@angular/core';


@Component({
  selector: 'ngx-pages',
 templateUrl:'./main-page.html',
 styleUrls:['./main-page.scss']
})
export class mainPageComponent {

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mdo',


  }, {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@fat',


  }, {
    id: 3,
    firstName: 'Larry',
    lastName: 'Bird',
    username: '@twitter',


  }, {
    id: 4,
    firstName: 'John',
    lastName: 'Snow',
    username: '@snow',

  }, {
    id: 5,
    firstName: 'Jack',
    lastName: 'Sparrow',
    username: '@jack',

  }, {
    id: 6,
    firstName: 'Ann',
    lastName: 'Smith',
    username: '@ann',


  }, {
    id: 7,
    firstName: 'Barbara',
    lastName: 'Black',
    username: '@barbara',

  }, {
    id: 8,
    firstName: 'Sevan',
    lastName: 'Bagrat',
    username: '@sevan',

  }, {
    id: 9,
    firstName: 'Ruben',
    lastName: 'Vardan',
    username: '@ruben',

  }, {
    id: 10,
    firstName: 'Karen',
    lastName: 'Sevan',
    username: '@karen',

  }]


}


