import "../../styles/style.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { examBooked } from './../../redux/actions/index';

const BookExam = () => {
  const courseState = useSelector((state) => state.courseReducer);
  const bookExamState = useSelector((state) => state.bookExamReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const [course, setCourse] = useState("default");
  const [date, setDate] = useState("default");
  const dispatch = useDispatch();
  const onClickHandler = () => {
    date !== "default" && dispatch(examBooked(course,date));
    setCourse("default");
    setDate("default");
  };

  return (
    <div className="Main">
      <h1 className="Heading">Book Exam</h1>
      <div className="Data3">
        <h1>Booked Exams</h1>
        {bookExamState.bookedDate.length !== 0 &&
          bookExamState.bookedDate.map(
            (item) =>
              item.studentName === user.name &&
              item.bookedExam.length !== 0 && (
                <>
                  <table border="1" width="50%">
                    <tr>
                      <th>Course Name</th>
                      <th>Date</th>
                    </tr>
                    {item.bookedExam.map((el) => (
                      <tr>
                        <td>{el.courseName}</td>
                        <td>{el.date}</td>
                      </tr>
                    ))}
                  </table>
                </>
              )
          )}
        <br></br>
        <br></br>
        <h1>Add</h1>
        <select onChange={(event) => setCourse(event.target.value)}>
          <option value="default">default</option>
          {Object.keys(courseState).map((key) =>
            courseState[key].map(
              (item) =>
                item.Name === user.name &&
                bookExamState.examDates.map(
                  (item) =>
                    item.courseName === key && (
                      <option value={key}>{key}</option>
                    )
                )
            )
          )}
        </select>
        {course !== "default" && (
          <table border="1" width="50%">
            <tr>
              <th>Course Name</th>
              <td>{course}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>
                <select onChange={(event) => setDate(event.target.value)}>
                  <option value="default">default</option>
                  {bookExamState.examDates.map(
                    (item) =>
                      item.courseName === course && (
                        <>
                          <option value={item.date1}>{item.date1}</option>
                          <option value={item.date2}>{item.date2}</option>
                        </>
                      )
                  )}
                </select>
              </td>
            </tr>
          </table>
        )}
        <button className="Button" onClick={onClickHandler}>Save</button>
      </div>
    </div>
  );
};

export default BookExam;
