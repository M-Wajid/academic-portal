import "../../styles/style.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AddExamDate from "./addExamDate";
import "../../styles/table-style.css"
import EditExamDate from "./editExamDate";
import { examDateDeleted } from './../../redux/actions/index';

const BookExamTeacher = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const bookExamState = useSelector((state) => state.bookExamReducer);
  const [editItemIndex, setEditItemIndex] = useState(null);
  const [editItem, setEditItem] = useState({date1:"",date2:""});
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const edit = (item, index) => {
    setEditItemIndex(index);
    setEditItem(item);
    setShow(true);
  };

  return (
    <>
      <div className="Main">
        <h1 className="Heading">Exam Dates</h1>
        <div className="Data3">
          <AddExamDate />
          <EditExamDate show={show} setShow={setShow} editItem={editItem} setEditItem={setEditItem} editItemIndex={editItemIndex}/>
          <table className="styled-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Date 1</th>
                <th>Date 2</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(courseState).map((key) =>
                courseState[key].map(
                  (item) =>
                    item.Name === user.name &&
                    bookExamState.examDates.map(
                      (item, index) =>
                        item.courseName === key && (
                          <tr>
                            <td>{item.courseName}</td>
                            <td>{item.date1}</td>
                            <td>{item.date2}</td>
                            <td>
                              <button
                                className="Button"
                                onClick={() => edit(item, index)}
                              >
                                Edit
                              </button>
                              {!bookExamState["bookedExam"].find(el => el.courseName === item.courseName) && 
                              <button
                                className="Button"
                                onClick={() => dispatch(examDateDeleted(item.courseName))}
                              >
                                Delete
                              </button>}
                            </td>
                          </tr>
                        )
                    )
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BookExamTeacher;
