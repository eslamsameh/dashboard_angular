import { Injectable } from '@angular/core';

@Injectable()
export class adminUsersSservices {

  data = [{
    id: 1,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mdo',
    email: 'mdo@gmail.com',
    age: '28',
    Role:"Admin"

  }, {
    id: 2,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@fat',
    email: 'fat@yandex.ru',
    age: '45',
    Role:"blogger"

  }, {
    id: 3,
    firstName: 'Larry',
    lastName: 'Bird',
    username: '@twitter',
    email: 'twitter@outlook.com',
    age: '18',
    Role:"blogger"

  }, {
    id: 4,
    firstName: 'John',
    lastName: 'Snow',
    username: '@snow',
    email: 'snow@gmail.com',
    age: '20',
    Role:"blogger"
  }, {
    id: 5,
    firstName: 'Jack',
    lastName: 'Sparrow',
    username: '@jack',
    email: 'jack@yandex.ru',
    age: '30',
    Role:"blogger"
  }, {
    id: 6,
    firstName: 'Ann',
    lastName: 'Smith',
    username: '@ann',
    email: 'ann@gmail.com',
    age: '21',
    Role:"cacher"

  }, {
    id: 7,
    firstName: 'Barbara',
    lastName: 'Black',
    username: '@barbara',
    email: 'barbara@yandex.ru',
    age: '43',
    Role:"cacher"
  }, {
    id: 8,
    firstName: 'Sevan',
    lastName: 'Bagrat',
    username: '@sevan',
    email: 'sevan@outlook.com',
    age: '13',
    Role:"cacher"
  }, {
    id: 9,
    firstName: 'Ruben',
    lastName: 'Vardan',
    username: '@ruben',
    email: 'ruben@gmail.com',
    age: '22',
    Role:"cacher"
  }, {
    id: 10,
    firstName: 'Karen',
    lastName: 'Sevan',
    username: '@karen',
    email: 'karen@yandex.ru',
    age: '33',
    Role:"cacher"
  }, {
    id: 11,
    firstName: 'Mark',
    lastName: 'Otto',
    username: '@mark',
    email: 'mark@gmail.com',
    age: '38',
    Role:"add Product Only"

  }, {
    id: 12,
    firstName: 'Jacob',
    lastName: 'Thornton',
    username: '@jacob',
    email: 'jacob@yandex.ru',
    age: '48',
    Role:"add Product Only"

  }, {
    id: 13,
    firstName: 'Haik',
    lastName: 'Hakob',
    username: '@haik',
    email: 'haik@outlook.com',
    age: '48',
    Role:"add Product Only"

  }, {
    id: 14,
    firstName: 'Garegin',
    lastName: 'Jirair',
    username: '@garegin',
    email: 'garegin@gmail.com',
    age: '40',
    Role:"bloger"

  }, {
    id: 15,
    firstName: 'Krikor',
    lastName: 'Bedros',
    username: '@krikor',
    email: 'krikor@yandex.ru',
    age: '32',
    Role:"bloger"

  }, {
    'id': 16,
    'firstName': 'Francisca',
    'lastName': 'Brady',
    'username': '@Gibson',
    'email': 'franciscagibson@comtours.com',
    'age': 11,
    'Role':"bloger"


  }, {
    'id': 17,
    'firstName': 'Tillman',
    'lastName': 'Figueroa',
    'username': '@Snow',
    'email': 'tillmansnow@comtours.com',
    'age': 34,
    'Role':"cacher"

  }, {
    'id': 18,
    'firstName': 'Jimenez',
    'lastName': 'Morris',
    'username': '@Bryant',
    'email': 'jimenezbryant@comtours.com',
    'age': 45,
    'Role':"cacher"

  }, {
    'id': 19,
    'firstName': 'Sandoval',
    'lastName': 'Jacobson',
    'username': '@Mcbride',
    'email': 'sandovalmcbride@comtours.com',
    'age': 32,
    'Role':"cacher"

  }, {
    'id': 20,
    'firstName': 'Griffin',
    'lastName': 'Torres',
    'username': '@Charles',
    'email': 'griffincharles@comtours.com',
    'age': 19,
    'Role':"cacher"

  }, {
    'id': 21,
    'firstName': 'Cora',
    'lastName': 'Parker',
    'username': '@Caldwell',
    'email': 'coracaldwell@comtours.com',
    'age': 27,
    'Role':"add Product Only"

  }, {
    'id': 22,
    'firstName': 'Cindy',
    'lastName': 'Bond',
    'username': '@Velez',
    'email': 'cindyvelez@comtours.com',
    'age': 24,
    'Role':"add Product Only"

  }, {
    'id': 23,
    'firstName': 'Frieda',
    'lastName': 'Tyson',
    'username': '@Craig',
    'email': 'friedacraig@comtours.com',
    'age': 45,
    'Role':"cacher"

  }, {
    'id': 24,
    'firstName': 'Cote',
    'lastName': 'Holcomb',
    'username': '@Rowe',
    'email': 'coterowe@comtours.com',
    'age': 20,
    'Role':"cacher"

  }, {
    'id': 25,
    'firstName': 'Trujillo',
    'lastName': 'Mejia',
    'username': '@Valenzuela',
    'email': 'trujillovalenzuela@comtours.com',
    'age': 16,
    'Role':"bloger"

  }];

  getData() {
    return this.data;
  }
}
