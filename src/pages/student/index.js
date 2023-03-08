import React from "react";
import ViewAttendence from "../../components/viewAttendance";
import ViewMarks from "../../components/ViewMarks";
import ViewCourses from './../../components/ViewCourses/index';

const Student = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Attendance</h1>
      <br></br>
      <ViewAttendence />
      <br></br>
      <br></br>
      <br></br>
      <h1>Marks</h1>
      <br></br>
      <ViewMarks />
      <br></br>
      <br></br>
      <br></br>
      <h1>Courses</h1>
      <br></br>
      <ViewCourses />
      {/* 
              ask for a leave
      */}
    </div>
  );
};

export default Student;
