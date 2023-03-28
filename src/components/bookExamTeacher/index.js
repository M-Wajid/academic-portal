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
  const [editItem, setEditItem] = useState(null);

  const edit = (item, index) => {
    setEditItemIndex(index);
    setEditItem(item);
  };

  return (
    <>
      <div className="Main">
        <h1 className="Heading">Exam Dates</h1>
        <div className="Data3">
          <AddExamDate />
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
          {editItemIndex !== null && editItemIndex !== undefined && (
            <EditExamDate
              editItem={editItem}
              setEditItem={setEditItem}
              editItemIndex={editItemIndex}
              setEditItemIndex={setEditItemIndex}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default BookExamTeacher;
