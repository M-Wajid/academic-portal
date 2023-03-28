import React from "react";
import Info from './../../components/info/index';
import "../../styles/style.css";
import ViewCourses from "../../components/viewTeacherCourses";
import BookExamTeacher from "../../components/bookExamTeacher";

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
      <BookExamTeacher />
    </div>
  );
};

export default Teacher;
