import React, { useState } from "react";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const { Item } = Menu;
const items = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "TV Shows",
    key: "tv",
  },
  {
    label: "Movies",
    key: "movie",
  },
];
const Navbar = () => {
  const [current, setCurrent] = useState("mail");
  const [showShadow, setShowShadow] = useState(false);
  const onClick = (e) => {
    console.log("click ", e);
    // setCurrent(e.key);
  };

  window.addEventListener("scroll", function () {
    console.log(this.scrollY);
    if (this.scrollY === 0 && showShadow) {
      setShowShadow(false);
    }
    if (this.scrollY !== 0 && !showShadow) {
      setShowShadow(true);
    }
  });
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      className={`navbar ${showShadow && "show-shadow"}`} 
      
    >
      {console.log(showShadow, "showShadow")}
      <div className="navlinks">
        <div>
          <Item>
            <span>Logo</span>
          </Item>
          {items.map((item) => (
            <Item key={item.key}>
              <span>{item.label}</span>
            </Item>
          ))}
        </div>
        <div>
          <Item>
            <MailOutlined />
          </Item>
          <Item>
            <span>Children</span>
          </Item>
          <Item>
            <span>
              <SettingOutlined />
            </span>
          </Item>
        </div>
      </div>
    </Menu>
  );
};
export default Navbar;
