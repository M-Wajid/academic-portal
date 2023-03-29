import "../../styles/style.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddExamDate from "./addExamDate";
import Table from "react-bootstrap/Table";
import EditExamDate from "./editExamDate";

const BookExamTeacher = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const bookExamState = useSelector((state) => state.bookExamReducer);
  const [editItemIndex, setEditItemIndex] = useState(null);
  const [editItem, setEditItem] = useState({date1:"",date2:""});
  const [show, setShow] = useState(false);

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
          <Table bordered hover>
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
                            </td>
                          </tr>
                        )
                    )
                )
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default BookExamTeacher;
