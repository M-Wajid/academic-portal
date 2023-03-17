import React from "react";
import LeaveApprovalAdmin from "../../components/leaveApprovalAdmin";
import ShowCourses from "../../components/showCourses";
import ShowUser from "../../components/showUser";
import Info from "./../../components/info/index";

const Admin = () => {
  return (
    <div>
      <Info />
      <ShowUser />
      <ShowCourses />
      <LeaveApprovalAdmin />
    </div>
  );
};

export default Admin;
