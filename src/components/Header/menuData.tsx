import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 33,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Tech-Driven Bookkeeping",
        path: "/bookkeeping",
        newTab: false,
      },
      {
        id: 42,
        title: "UK Taxes",
        path: "/taxes",
        newTab: false,
      },

      {
        id: 44,
        title: "QuickBooks-GSheets Automation",
        path: "/quickbooks",
        newTab: false,
      },

    ],
  },
];
export default menuData;
