import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Main Page",
    icon: "nb-e-commerce",
    link: "/pages/main",
    home: true
  },

  {
    title: "FEATURES",
    group: true
  },
  {
    title: "products",
    icon: "nb-keypad",
    link: "/pages/products",
    children: [
      {
        title: "AllProducts",
        link: "/pages/products/get-all-products"
      },
      {
        title: "AddProduct",
        link: "/pages/products/add-new-product"
      }
    ]
  },
  {
    title: "Feature Product",
    icon: "nb-compose",
    children: [
      {
        title: "Add Feature Product",
        link: "/pages/featureProducts/add-new-feature-product"
      },
      {
        title: "All Feature Product",
        link: "/pages/featureProducts/get-all-feature-products"
      }
    ]
  },
  {
    title: "Categories",
    icon: "nb-keypad",
    link: "/pages/category",
    children: [
      {
        title: "All Category",
        link: "/pages/category/get-all-category"
      },
      {
        title: "Add Category",
        link: "/pages/category/add-new-category"
      }
    ]
  },
  {
    title: "Categories For Articals",
    icon: "nb-keypad",
    link: "/pages/artical-category",
    children: [
      {
        title: "All Category",
        link: "/pages/artical-category/get-all-artical-category"
      },
      {
        title: "Add Category",
        link: "/pages/artical-category/add-new-artical-category"
      }
    ]
  },
  {
    title: "Articals",
    icon: "nb-keypad",
    link: "/pages/artical",
    children: [
      {
        title: "Add Artical",
        link: "/pages/artical/add-new-artical"
      },
      {
        title: "All Articals",
        link: "/pages/artical/get-all-articals"
      }
    ]
  },
  {
    title: "Manage Admin",
    icon: "nb-bar-chart",
    link: "/pages/manage-admin",
    children: [
      {
        title: "Add New Admin",
        link: "/pages/manage-admin/add-new-admin"
      },
      {
        title: "All Admins",
        link: "/pages/manage-admin/get-all-manage-admins"
      }
    ]
  },
  {
    title: "Messages",
    icon: "nb-title",
    link: "/pages/message-notification//message"
  },

  {
    title: "ManageUser",
    icon: "nb-person",
    children: [
      {
        title: "ALL User",
        link: "/pages/ManageUser/get-all-users"
      },
      {
        title: "ALL Suspended Users",
        link: "/pages/ManageUser/all-suspended-users"
      }
    ]
  },
  {
    title: "Profile",
    icon: "nb-person",
    link: "/pages/profile"
  }
];
