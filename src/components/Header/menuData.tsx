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
        title: "Web Development",
        path: "/services/webDevelopment",
        newTab: false,
      },
      {
        id: 2,
        title: "Mobile App Development",
        path: "/services/mobileAppDevelopment",
        newTab: false,
      },
      {
        id: 3,
        title: "Software Development",
        path: "/services/softwareDevelopment",
        newTab: false,
      },
      {
        id: 4,
        title: "Blockchain Development",
        path: "/services/blockchainDevelopment",
        newTab: false,
      },
      {
        id: 5,
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
    id: 6,
    title: "Blogs",
    path: "/#",
    newTab: false,
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


];
export default menuData;
