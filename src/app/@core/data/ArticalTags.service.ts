import { Injectable } from '@angular/core';

@Injectable()
export class ArticalTagesService {

  data = [{
    id: 1,
    ArticalTag: 'Mark',

  }, {
    id: 2,
    ArticalTag: 'Jacob',


  }, {
    id: 3,
    ArticalTag: 'Larry',

  }, {
    id: 4,
    ArticalTag: 'John',

  }, {
    id: 5,
    ArticalTag: 'Jack',
      },
       {
    id: 6,
    ArticalTag: 'Ann',

  }, {
    id: 7,
    ArticalTag: 'Barbara',
    }, {
    id: 8,
    ArticalTag: 'Sevan',

  }, {
    id: 9,
    ArticalTag: 'Ruben',

  }, {
    id: 10,
    ArticalTag: 'Karen',

  }, {
    id: 11,
    ArticalTag: 'Mark',

  }, {
    id: 12,
    ArticalTag: 'Jacob',

  }, {
    id: 13,
    ArticalTag: 'Haik',

  }, {
    id: 14,
    ArticalTag: 'Garegin',

  }, {
    id: 15,
    ArticalTag: 'Krikor',

  }, {
    'id': 16,
    'ArticalTag': 'Francisca',
     }, {
    'id': 17,
    'ArticalTag': 'Tillman',

  }, {
    'id': 18,
    'ArticalTag': 'Jimenez',

  }, {
    'id': 19,
    'ArticalTag': 'Sandoval',

  }, {
    'id': 20,
    'ArticalTag': 'Griffin',

  }, {
    'id': 21,
    'ArticalTag': 'Cora',

  }, {
    'id': 22,
    'ArticalTag': 'Cindy',

  }, {
    'id': 23,
    'ArticalTag': 'Frieda',

  }
  ];

  getData() {
    return this.data;
  }
}
