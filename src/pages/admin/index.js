import React from "react";
import ShowCourses from "../../components/showCourses";
import ShowUser from "../../components/showUser";
import Info from "./../../components/info/index";

const Admin = () => {
  return (
    <div>
      <Info />
      <ShowUser />
      <ShowCourses />
    </div>
  );
};

export default Admin;
