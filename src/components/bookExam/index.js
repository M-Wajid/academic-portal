import "../../styles/style.css";
import AddExam from "./addExam";
import BookedExams from './bookedExams';

const BookExam = () => {
  return (
    <div className="Main">
      <h1 className="Heading">Exam</h1>
      <div className="Data3">
      <BookedExams />
      <AddExam />
      </div>
    </div>
  );
};

export default BookExam;
