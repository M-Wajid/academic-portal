import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { examBooked } from './../../redux/actions/index';
import Table from 'react-bootstrap/Table';

const AddExam = () => {
  const courseState = useSelector((state) => state.courseReducer);
  const bookExamState = useSelector((state) => state.bookExamReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const [course, setCourse] = useState("default");
  const [date, setDate] = useState("default");
  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    date !== "default" && dispatch(examBooked(user.name,course,date));
  };

  return (
    <>
      <h1>Book Exam</h1>
      <select onChange={(event) => setCourse(event.target.value)}>
        <option value="default" >Please select a Course</option>
        {Object.keys(courseState).map((key) =>
          courseState[key].map(
            (item) =>
              item.Name === user.name &&
              bookExamState.examDates.map(
                (item) =>
                  item.courseName === key && <option value={key}>{key}</option>
              )
          )
        )}
      </select>
      <br></br>
      {course !== "default" && (
        <Table bordered hover>
          <thead>
           <tr>
            <th>Course Name</th>
            <th>Date</th>  
          </tr> 
          </thead>
          <tbody>
            <tr>
          <td>{course}</td>
            <td>
              <select onChange={(event) => setDate(event.target.value)}>
                <option value="default">Please select exam date</option>
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
          </tbody>
          
        </Table>
      )}
      <button className="Button" onClick={onClickHandler}>
        Add
      </button>  
    </>
  );
};

export default AddExam;
