import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
    home: true,
  },

  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'products',
    icon: 'nb-keypad',
    link: '/pages/products',
    children: [
      {
        title: 'AllProducts',
        link: '/pages/products/get-all-products',
      },
      {
        title: 'AddProduct',
        link: '/pages/products/add-new-product',
      },

    ],
  },
  {
    title: 'Feature Product',
    icon: 'nb-compose',
    children: [
      {
        title: 'Add New Feature Product',
        link: '/pages/featureProducts/add-new-feature-product',
      },
      {
        title: 'All Feature Product',
        link: '/pages/featureProducts/get-all-feature-products',
      },
    ],
  },
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'ManageUser',
    icon: 'nb-person',
    children: [
      {
        title: 'ALL User',
        link: '/pages/ManageUser/get-all-users',
      },
      {
        title: 'ALL Suspended Users',
        link: '/pages/ManageUser/all-suspended-users',
      },
    ],
  },
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
  // {
  //   title: 'ManageUser',
  //   icon: 'nb-person',
  //   link: '/pages/ManageUser/get-all-users',
  // },
];
