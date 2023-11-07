import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Button, Drawer } from "antd";
import { Menu } from "antd";

import { MenuOutlined } from "@ant-design/icons";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  let { pathname: location } = useLocation();
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
                <Sidebar mode={"horizontal"} />
              </div>

              <Drawer
                title={"Brand Here"}
                placement="right"
                closable={true}
                onClose={showDrawer}
                visible={visible}
                style={{ zIndex: 99999 }}
              >
                <Menu mode={"inline"}>
                  <Menu.Item key="explore">Explore</Menu.Item>
                  <Menu.Item key="features">Features</Menu.Item>
                  <Menu.Item key="about">About Us</Menu.Item>
                  <Menu.Item key="contact">Contact Us</Menu.Item>
                </Menu>
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
