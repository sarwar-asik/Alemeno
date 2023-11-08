import { Menu } from "antd";

import NavItem from "../conts/NavItem";

const Sidebar = ({ mode }: { mode: "inline" | "horizontal" }) => {
  return (
    <Menu defaultActiveFirst mode={mode}>
      <NavItem />
    </Menu>
  );
};

export default Sidebar;
