import { FaChartPie } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BiBarChartSquare } from "react-icons/bi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

export const SideBarData = [
  {
    title: "Dashboard(business)",
    path: "/",
    icon: <FaChartPie />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FaMoneyBill />,
  },

  {
    title: "Messages",
    path: "/messages",
    icon: <FaLightbulb />,
  },

  {
    title: "Products/Services",
    path: "",
    icon: <FaCreditCard />,
    iconClosed: <MdKeyboardArrowDown />,
    iconOpened: <MdKeyboardArrowUp />,

    subSidebar: [
      {
        title: "Services",
        path: "/services",
      },
      {
        title: "Products",
        path: "/services/products",
      },
      {
        title: "Orders",
        path: "/services/orders",
      },
    ],
  },

  {
    title: "Contacts",
    path: "",
    icon: <AiOutlineLineChart />,
    iconClosed: <MdKeyboardArrowDown />,
    iconOpened: <MdKeyboardArrowUp />,
    subSidebar: [
      {
        title: "Contact",
        path: "/contacts",
      },
      {
        title: "Contact Requests",
        path: "/contacts/requests",
      },
      {
        title: "Blocked Contacts",
        path: "/contacts/blocked",
      },
    ],
  },

  {
    title: "Payments",
    path: "",
    icon: <FaUsers />,
    iconClosed: <MdKeyboardArrowDown />,
    iconOpened: <MdKeyboardArrowUp />,

    subSidebar: [
      {
        title: "Transactions",
        path: "/payments/transactions",
      },
      {
        title: "Requests",
        path: "/payments/requests",
      },
      {
        title: "Payouts",
        path: "/payments/payouts",
      },
      {
        title: "invoice",
        path: "/payments/invoice",
      },
      {
        title: "Payment Contract",
        path: "/payments/contracts",
      },
      {
        title: "Bank Accounts ",
        path: "/payments/bankaccounts",
      },
    ],
  },

  {
    title: "Blogs",
    path: "",
    icon: <BiEnvelope />,

    iconClosed: <MdKeyboardArrowDown />,
    iconOpened: <MdKeyboardArrowUp />,

    subSidebar: [
      {
        title: "Blog Posts",
        path: "/blogs",
      },
      {
        title: "Create Blog posts",
        path: "/blogs/newpost",
      },
    ],
  },

  {
    title: "Settings",
    path: "",
    icon: <BiBarChartSquare />,
    iconClosed: <MdKeyboardArrowDown />,
    iconOpened: <MdKeyboardArrowUp />,

    subSidebar: [
      {
        title: "Team Members",
        path: "/settings/members",
      },
      {
        title: "Shipping Options",
        path: "/settings/shipping",
      },
      {
        title: "Terms & Conditions",
        path: "/settings/tsandcs",
      },
    ],
  },
];
