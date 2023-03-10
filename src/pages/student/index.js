import ViewCourses from './../../components/ViewCourses/index';
import Info from './../../components/info/index';
import Header from "../../components/header";
import RegisterCourse from '../../components/registerCourse';

const Student = () => {
  return (
    <div>
      <Header />
      <Info />
      <ViewCourses />
      <RegisterCourse />
    </div>
  );
};

export default Student;
