import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { contentStyle, headerStyle, siderStyle } from "../../App-Style";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import SiderMenu from "./siderMenu";
import adminSidebarItems from "../../data/adminSidebar.json";
import teacherSidebarItems from "../../data/teacherSidebar.json";
import studentSidebarItems from "../../data/studentSidebar.json";

const { Header, Content, Sider } = Layout;
const AppLayout = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const [collapse, setCollapse] = useState(true);
  const navigate = useNavigate();
  return (
    <Layout>
      <Header style={headerStyle}>
        <div className="header">
          <AiOutlineMenu onClick={() => setCollapse(!collapse)} />
          <div>Academic Portal</div>
          <Menu
              onClick={({key}) => {
                if (key === "logout"){
                  localStorage.clear();
                  navigate("/");
                }
              }}
              mode="horizontal"
              style={headerStyle}
              items={[
                {
                  key: "user",
                  icon: <AiOutlineUser />,
                  children: [{ label: "Logout", key: "logout", icon: <AiOutlineLogout />}]
                },
               
              ]}
            />
        </div>
      </Header>
      <Layout>
        <Sider collapsed={collapse} style={siderStyle}>
          {user.role === "admin" ? (
            <SiderMenu items={adminSidebarItems}/>
          ) : user.role === "teacher" ? (
            <SiderMenu items={teacherSidebarItems}/>
          ) : (
            user.role === "student" && <SiderMenu items={studentSidebarItems}/>
          )}
        </Sider>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
