import ViewCourses from './../../components/ViewCourses/index';
import Info from './../../components/info/index';
import RegisterCourse from '../../components/registerCourse';

const Student = () => {
  return (
    <div>
      <Info />
      <ViewCourses />
      <RegisterCourse />
      {
        /*
         leave
         exam date selection
         attendence in percentage 
         marks in percentage
         */
      }
    </div>
  );
};

export default Student;
