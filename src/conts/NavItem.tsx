import { Avatar, MenuProps } from "antd";

import { Link } from "react-router-dom";
import {
  HomeOutlined,
  TableOutlined,
  DashboardFilled,
} from "@ant-design/icons";

export const NavItem = (name: "sidebar" | "dashboard" | "nav") => {
  const navBarItems: MenuProps["items"] = [
    {
      label: <Link to="/">Home</Link>,
      key: "/Home",
    },
    {
      label: <Link to="/courses">Courses</Link>,
      key: "/courses",
    },
    {
      label: <Link to="/">Blogs</Link>,
      key: "/blogs",
    },
    {
      label: <Link to="/dashboard">DashBoards</Link>,
      key: "/dashboard",
    },
    // {
    //   label: (
    //     <Link to="/dashboard">
    //       <Avatar />
    //     </Link>
    //   ),
    //   key: "/user-profile",
    //   //   icon: <Avatar />,
    // },
  ];
  const SideBarItems: MenuProps["items"] = [
    {
      label: <Link to="/">Home</Link>,
      key: "/Home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/courses">Courses</Link>,
      key: "/courses",
      icon: <TableOutlined />,
    },
    {
      label: <Link to="/dashboard">DashBoard</Link>,
      key: "/dashboard",
      icon: <DashboardFilled />,
    },
  ];
  const DashBoardItems: MenuProps["items"] = [
    {
      label: <Link to="/">Home</Link>,
      key: "/Home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to="/dashboard/courses">Courses</Link>,
      key: "/courses",
      icon: <TableOutlined />,
    },
    {
      label: <Link to="/dashboard/enrolled">Enrolled</Link>,
      key: "/enrolled",
      icon: <DashboardFilled />,
    },
  ];

  if (name === "nav") return navBarItems;
  else if (name === "sidebar") return SideBarItems;
  else if (name === "dashboard") return DashBoardItems;
};
