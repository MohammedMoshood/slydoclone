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
    path: "/dashboard",
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
    path: "/services",
    icon: <FaCreditCard />,
    iconClosed: <MdKeyboardArrowDown  />,
    iconOpened: <MdKeyboardArrowUp />,

    subSidebar: [
      {
        title: "Orders",
        path: "/blogs/orders",
      },
      {
        title: "Emails",
        path: "/blogs/emails",
      },
      {
        title: "Sms",
        path: "/blogs/sms",
      },
     
    ],
},

  {
    title: "Contacts",
    path: "/contacts",
    icon: <AiOutlineLineChart />,
    iconClosed: <MdKeyboardArrowDown />,
    iconOpened: <MdKeyboardArrowUp />,
    subSidebar: [
      {
        title: "Orders",
        path: "/blogs/orders",
      },
      {
        title: "Emails",
        path: "/blogs/emails",
      },
      {
        title: "Sms",
        path: "/blogs/sms",
      },]
  },

  {
    title: "Payments",
    path: "/payments",
    icon: <FaUsers />,
    iconClosed: <MdKeyboardArrowDown />,
    iconOpened: <MdKeyboardArrowUp />,

    subSidebar: [
      {
        title: "Orders",
        path: "/blogs/orders",
      },
      {
        title: "Emails",
        path: "/blogs/emails",
      },
      {
        title: "Sms",
        path: "/blogs/sms",
      },
     
    ],
  },

  {
    title: "Blogs",
    path: "/blogs",
    icon: <BiEnvelope />,

    iconClosed: <MdKeyboardArrowDown />,
    iconOpened: <MdKeyboardArrowUp />,

    subSidebar: [
      {
        title: "Orders",
        path: "/blogs/orders",
      },
      {
        title: "Emails",
        path: "/blogs/emails",
      },
      {
        title: "Sms",
        path: "/blogs/sms",
      },
     
    ],
  },

  {
    title: "Settings",
    path: "/settings",
    icon: <BiBarChartSquare />,
    iconClosed: <MdKeyboardArrowDown />,
    iconOpened: <MdKeyboardArrowUp />,

    subSidebar: [
      {
        title: "Orders",
        path: "/blogs/orders",
      },
      {
        title: "Emails",
        path: "/blogs/emails",
      },
      {
        title: "Sms",
        path: "/blogs/sms",
      },
     
    ],
  },
];
