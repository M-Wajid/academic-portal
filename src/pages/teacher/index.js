import React from "react";
import Info from './../../components/info/index';
import ViewCourses from './../../components/ViewCourses/index';
import LeaveApprovalTeacher from './../../components/leaveApprovalTeacher/index';

const Teacher = () => {
  return (
    <div>
      <Info />
      <div className='addCourseMain'>
        <h1 className='addCourseHeading'>Assigned Courses</h1>
        <div className='addCourseData'>
          <ViewCourses />
        </div>
      </div>
      <LeaveApprovalTeacher />
    </div>
  );
};

export default Teacher;
