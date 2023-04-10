import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import *as AntdIcons from "react-icons/ai";
import { siderStyle } from "../../App-Style";

const SiderMenu = (props) => {
  const {items} = props
  const navigate = useNavigate();
  return (
    <Menu
      mode="inline"
      style={siderStyle}
      onClick={({ key }) => {
        navigate(key);
      }}
      items={items.map(item => {
        return{
          label: item.label,
          key: item.key,
          icon: React.createElement(AntdIcons[item.icon])
        }
      })}
    />
  );
};

export default SiderMenu;
