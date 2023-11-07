import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
import {Link} from "react-router-dom"
const MenuItemGroup = Menu.ItemGroup;
const Sidebar = ({ mode }: { mode: string }) => {
  return (
    <Menu mode={mode as any}>
      <Menu.Item key="mail">
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
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
