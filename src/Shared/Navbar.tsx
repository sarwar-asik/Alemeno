import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Button, Drawer, Menu } from "antd";
// import { Menu } from "antd";

import { MenuOutlined } from "@ant-design/icons";
import Sidebar from "./Sidebar";
import { NavItem } from "../conts/NavItem";
// import NavItem from "../conts/NavItem";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  const { pathname: location } = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);

  return (
    <div
      style={{
        background: "red",
      }}
    >
      <nav className="navbar">
        <Layout>
          <Layout.Header className="nav-header">
            <div className="logo">
              {/* <Link to="/" className="brand-font">
                Alemeno
              </Link> */}
              <Link to="/" className="brand-font">
                Alemeno
              </Link>
            </div>
            <div className="navbar-menu">
              <div className="leftMenu">
                {/* <LeftMenu mode={"horizontal"} /> */}
                {/* <Menu mode={"horizontal"}>
                  <Menu.Item key="explore">Explore</Menu.Item>
                  <Menu.Item key="features">Features</Menu.Item>
                  <Menu.Item key="about">About Us</Menu.Item>
                  <Menu.Item key="contact">Contact Us</Menu.Item>
                </Menu> */}
              </div>
              <Button className="menuButton" type="text" onClick={showDrawer}>
                <MenuOutlined />
              </Button>
              <div className="rightMenu">
                {/* <Sidebar mode={"horizontal"} /> */}
                {/* <Menu mode={"horizontal"}>
                  <Menu.Item key="explore">Explore</Menu.Item>
                  <Menu.Item key="features">Features</Menu.Item>
                
                </Menu> */}
                <Menu  mode="horizontal"  defaultSelectedKeys={['1']}  items={NavItem("nav")}/>
              </div>

              <Drawer
                title={"Brand Here"}
                placement="right"
                closable={true}
                onClose={showDrawer}
                visible={visible}
                style={{ zIndex: 99999 }}
              >
                {/* <Menu mode={"inline"}>
                  <Menu.Item key="explore">Explore</Menu.Item>
                  <Menu.Item key="features">Features</Menu.Item>
                  <Menu.Item key="about">About Us</Menu.Item>
                  <Menu.Item key="contact">Contact Us</Menu.Item>
                </Menu> */}
                <Sidebar mode={"inline"} />
              </Drawer>
            </div>
          </Layout.Header>
        </Layout>
      </nav>
    </div>
  );
};

export default Navbar;
