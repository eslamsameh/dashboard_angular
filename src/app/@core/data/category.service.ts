import { Injectable } from '@angular/core';

@Injectable()
export class categoryService {

  data = [{
    id: 1,
    CategoryName: 'Mark',
    imageCategory: 'https://image.ibb.co/dxrkHT/category3.jpg',
    CategoryParent:"",
    briefdescription:'mdo',
    description: 'mdo@gmail.commdo@gmail.commdo@gmail.commdo@gmail.commdo@gmail.commdo@gmail.com',
    icon: 'nb-cloudy',
    numberofproducts:20
  }, {
    id: 2,
    CategoryName: 'Jacob',
    imageCategory: 'https://image.ibb.co/dxrkHT/category3.jpg',
    CategoryParent:"Mark",
    briefdescription:'fat',
    description: 'fat@yandex.rufat@yandex.rufat@yandex.rufat@yandex.rufat@yandex.rufat@yandex.rufat@yandex.rufat@yandex',
    icon: 'nb-cloudy',
    numberofproducts:20

  }, {
    id: 3,
    CategoryName: 'Larry',
    imageCategory: 'https://image.ibb.co/dxrkHT/category3.jpg',
    CategoryParent: '',
    briefdescription:'snow',
    description: 'twitter@outlook.comtwitter@outlook.comtwitter@outlook.comtwitter@outlook.comtwitter@outlook.comtwitter@outlook.comtwitter@outlook.com',
    icon: 'nb-cloudy',
    numberofproducts:20
  }, {
    id: 4,
    CategoryName: 'John',
    imageCategory: 'https://image.ibb.co/dxrkHT/category3.jpg',
    CategoryParent: 'Larry',
    briefdescription:'snow',
    description: 'snow@gmail.comsnow@gmail.comsnow@gmail.comsnow@gmail.comsnow@gmail.comsnow@gmail.com',
    icon: 'nb-cloudy',
    numberofproducts:20
  }, {
    id: 5,
    CategoryName: 'Jack',
    imageCategory: 'https://image.ibb.co/dxrkHT/category3.jpg',
    CategoryParent: 'Larry',
    briefdescription:'jack',
    description: 'jack@yandex.rujack@yandex.rujack@yandex.rujack@yandex.rujack@yandex.ru',
    icon: 'nb-cloudy',
    numberofproducts:20
  }, {
    id: 6,
    CategoryName: 'Ann',
    imageCategory: 'https://image.ibb.co/dxrkHT/category3.jpg',
    CategoryParent: 'Larry',
    briefdescription:'barbara',
    description: 'ann@gmail.comann@gmail.comann@gmail.comann@gmail.comann@gmail.comann@gmail.com',
    icon: 'nb-cloudy',
    numberofproducts:20
  }, {
    id: 7,
    CategoryName: 'Barbara',
    imageCategory: 'https://image.ibb.co/dxrkHT/category3.jpg',
    CategoryParent: '',
    briefdescription:'barbara',
    description: 'barbara@yandex.rubarbara@yandex.rubarbara@yandex.rubarbara@yandex.rubarbara@yandex.ru',
    icon: 'nb-cloudy',
    numberofproducts:20
  }, {
    id: 8,
    CategoryName: 'Sevan',
    imageCategory: 'https://image.ibb.co/dxrkHT/category3.jpg',
    CategoryParent: '',
    briefdescription:'sevan',
    description: 'sevan@outlook.comsevan@outlook.comsevan@outlook.comsevan@outlook.comsevan@outlook.com',
    icon: 'nb-cloudy',
    numberofproducts:20
  }, {
    id: 9,
    CategoryName: 'Ruben',
    imageCategory: 'https://image.ibb.co/dxrkHT/category3.jpg',
    CategoryParent: '',
    briefdescription:'sevan',
    description: 'sevan@outlook.comsevan@outlook.comsevan@outlook.comsevan@outlook.comsevan@outlook.com',
    icon: 'nb-cloudy',
    numberofproducts:20
  }, {
    id: 10,
    CategoryName: 'Karen',
    imageCategory: 'https://image.ibb.co/dxrkHT/category3.jpg',
    CategoryParent: '',
    briefdescription:'karen',
    description: 'karen@yandex.rukaren@yandex.rukaren@yandex.rukaren@yandex.rukaren@yandex.rukaren@yandex.ru',
    icon: 'nb-cloudy',
    numberofproducts:20
  }, {
    id: 11,
    CategoryName: 'Mark',
    imageCategory: 'https://image.ibb.co/dxrkHT/category3.jpg',
    CategoryParent: '@mark',
    briefdescription:'mark',
    description: 'mark@gmail.commark@gmail.commark@gmail.commark@gmail.commark@gmail.commark@gmail.commark@gmail.com',
    icon: 'nb-cloudy',
    numberofproducts:20
  }, {
    id: 12,
    CategoryName: 'Jacob',
    imageCategory: 'https://image.ibb.co/dxrkHT/category3.jpg',
    CategoryParent: 'Mark',
    briefdescription:'jacob',
    description: 'jacob@yandex.rujacob@yandex.rujacob@yandex.rujacob@yandex.rujacob@yandex.rujacob@yandex.ru',
    icon: 'nb-cloudy',
    numberofproducts:20
  }, {
    id: 13,
    CategoryName: 'Haik',
    imageCategory: 'https://image.ibb.co/dxrkHT/category3.jpg',
    CategoryParent: 'Mark',
    briefdescription:'haik',
    description: 'haik@outlook.comhaik@outlook.comhaik@outlook.comhaik@outlook.comhaik@outlook.comhaik@outlook.com',
    icon: 'nb-cloudy',
    numberofproducts:20
  }, {
    id: 14,
    CategoryName: 'Garegin',
    imageCategory: 'https://image.ibb.co/dxrkHT/category3.jpg',
    CategoryParent: 'Mark',
    briefdescription:'garegin',
    description: 'garegin@gmail.comgaregin@gmail.comgaregin@gmail.comgaregin@gmail.comgaregin@gmail.com',
    icon: 'nb-cloudy',
    numberofproducts:20
  }, {
    id: 15,
    CategoryName: 'Krikor',
    imageCategory: 'https://image.ibb.co/dxrkHT/category3.jpg',
    CategoryParent: '',
    briefdescription:'krikor',
    description: 'krikor@yandex.rukrikor@yandex.rukrikor@yandex.rukrikor@yandex.rukrikor@yandex.ru',
    icon: 'nb-cloudy',
    numberofproducts:20
  }, {
    'id': 16,
    'CategoryName': 'Francisca',
    'imageCategory': 'https://image.ibb.co/dxrkHT/category3.jpg',
    'CategoryParent': '',
    'briefdescription':'franciscagibson',
    'description': 'franciscagibson@comtours.comfranciscagibson@comtours.comfranciscagibson@comtours.comfranciscagibson@comtours.com',
    'age':'nb-cloudy',
    'numberofproducts':20
  }, {
    'id': 17,
    'CategoryName': 'Tillman',
    'imageCategory': 'https://image.ibb.co/dxrkHT/category3.jpg',
    'CategoryParent': '',
    'briefdescription':'tillmansnow',
    'description': 'tillmansnow@comtours.comtillmansnow@comtours.comtillmansnow@comtours.comtillmansnow@comtours.com',
    'age': 'nb-cloudy',
    'numberofproducts':20

  }, {
    'id': 18,
    'CategoryName': 'Jimenez',
    'imageCategory': 'https://image.ibb.co/dxrkHT/category3.jpg',
    'CategoryParent': '',
    'briefdescription':'jimenezbryant',
    'description': 'jimenezbryant@comtours.comjimenezbryant@comtours.comjimenezbryant@comtours.comjimenezbryant@comtours.com',
    'age': 'nb-cloudy',
    'numberofproducts':20

  }, {
    'id': 19,
    'CategoryName': 'Sandoval',
    'imageCategory': 'https://image.ibb.co/dxrkHT/category3.jpg',
    'CategoryParent': 'Mark',
    'briefdescription':'sandovalmcbride',
    'description': 'sandovalmcbride@comtours.comsandovalmcbride@comtours.comsandovalmcbride@comtours.comsandovalmcbride@comtours.com',
    'age': 'nb-cloudy',
    'numberofproducts':20

  }, {
    'id': 20,
    'CategoryName': 'Griffin',
    'imageCategory': 'https://image.ibb.co/dxrkHT/category3.jpg',
    'CategoryParent': 'Mark',
    'briefdescription':'griffincharles',
    'description': 'griffincharles@comtours.comgriffincharles@comtours.comgriffincharles@comtours.com',
    'age': 'nb-cloudy',
    'numberofproducts':20

  }, {
    'id': 21,
    'CategoryName': 'Cora',
    'imageCategory': 'https://image.ibb.co/dxrkHT/category3.jpg',
    'CategoryParent': '',
    'briefdescription':'coracaldwell',
    'description': 'coracaldwell@comtours.comcoracaldwell@comtours.comcoracaldwell@comtours.com',
    'age': 'nb-cloudy',
    'numberofproducts':20

  }, {
    'id': 22,
    'CategoryName': 'Cindy',
    'imageCategory': 'https://image.ibb.co/dxrkHT/category3.jpg',
    'CategoryParent': '',
    'briefdescription':'cindyvelez',
    'description': 'cindyvelez@comtours.comcindyvelez@comtours.comcindyvelez@comtours.comcindyvelez@comtours.com',
    'age': 'nb-cloudy',
    'numberofproducts':20

  }, {
    'id': 23,
    'CategoryName': 'Frieda',
    'imageCategory': 'https://image.ibb.co/dxrkHT/category3.jpg',
    'CategoryParent': 'Mark',
    'briefdescription':'friedacraig',
    'description': 'friedacraig@comtours.comfriedacraig@comtours.comfriedacraig@comtours.comfriedacraig@comtours.com',
    'age': 'nb-cloudy',
    'numberofproducts':20

  }
  ];

  getData() {
    return this.data;
  }
}
