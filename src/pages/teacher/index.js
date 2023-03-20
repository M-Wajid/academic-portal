import React from "react";
import Info from './../../components/info/index';
import ViewCourses from './../../components/ViewCourses/index';
import LeaveApprovalTeacher from './../../components/leaveApprovalTeacher/index';
import "../../styles/style.css";

const Teacher = () => {
  return (
    <div>
      <Info />
      <div className='Main'>
        <h1 className='Heading'>Assigned Courses</h1>
        <div className='Data'>
          <ViewCourses />
        </div>
      </div>
      <LeaveApprovalTeacher />
    </div>
  );
};

export default Teacher;
