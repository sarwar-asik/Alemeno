import { Menu } from "antd";

import { Link } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const NavItem = () => {
  return (
    <>
      <Menu.Item key="mail">
        <Link to="/">Home</Link>
      </Menu.Item>
      <SubMenu key="blogs" title={<span>Blogs</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="contact">
        <Link to="">DashBoard</Link>
      </Menu.Item>
    </>
  );
};

export default NavItem;
