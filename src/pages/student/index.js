import Info from './../../components/info/index';
import AddLeave from '../../components/addLeave';
import RegisterCourse from '../../components/registerCourse';
import BookExam from '../../components/bookExam';

const Student = () => {
  return (
    <div>
      <Info />
      <RegisterCourse /> 
      <BookExam />
      <AddLeave />
      {
        /*
         leave
         exam date selection
         attendence in percentage graph
         marks in percentage graph
         */
      }
    </div>
  );
};

export default Student;
