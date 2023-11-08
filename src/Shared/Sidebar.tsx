import { Menu } from "antd";
// const SubMenu = Menu.SubMenu;
// import {Link} from "react-router-dom"
// const MenuItemGroup = Menu.ItemGroup;
import { NavItem } from "../conts/NavItem";
const Sidebar = ({ mode }: { mode: "inline"|"horizontal" }) => {
  return (
    <Menu mode={mode} items={NavItem("sidebar")}>
      {/* <Menu.Item key="mail">
        <Link to='/'>Home</Link>
      </Menu.Item>
      <SubMenu title={<span>Blogs</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <Link to="">Contact Us</Link>
      </Menu.Item> */}
    </Menu>
  );
};

export default Sidebar;
