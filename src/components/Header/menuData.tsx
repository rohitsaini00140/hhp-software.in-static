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
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [

      {
        id: 1,
        title: "EV Charging",
        path: "/services/ev-charging",
        newTab: false,
      },
      {
        id: 2,
        title: "Web Development",
        path: "/services/webDevelopment",
        newTab: false,
      },
      {
        id: 3,
        title: "Mobile App Development",
        path: "/services/mobileAppDevelopment",
        newTab: false,
      },
      {
        id: 4,
        title: "Software Development",
        path: "/services/softwareDevelopment",
        newTab: false,
      },
      {
        id: 5,
        title: "Block Chain Development",
        path: "/services/blockchainDevelopment",
        newTab: false,
      },
      {
        id: 6,
        title: "Digital Marketing Services",
        path: "/services/digitalMarketingServices",
        newTab: false,
      },
    ]
  },
  {
    id: 4,
    title: "Additional Services",
    newTab: false,
    submenu: [
      {
        id: 1,
        title: "IT Hardware",
        path: "/additionalServices/ITHardware",
        newTab: false,
      },
      {
        id: 2,
        title: "IT Manpower",
        path: "/additionalServices/ITManpower",
        newTab: false,
      }
    ]
  },

  {
    id: 5,
    title: "Billing Software Demo",
    path: "/billingSoftwareDemo",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 7,
    title: "Blogs",
    path: "/blogs",
    newTab: false,
  },

];
export default menuData;
