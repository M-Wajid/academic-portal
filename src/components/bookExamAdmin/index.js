import "./bookExamAdmin.css";
import { useSelector, useDispatch} from "react-redux";
import { useState } from "react";
import { examDateAdded, examDateEdited } from './../../redux/actions/index';

const BookExamAdmin = () => {
  const bookExamState = useSelector((state) => state.bookExamReducer);
  const [data, setData] = useState({});
  const [editItemIndex, setEditItemIndex] = useState(null);
  const [editItem, setEditItem] = useState(null);
  const dispatch = useDispatch();

  const edit = (item,index) => {
    setEditItemIndex(index);
    setEditItem(item);
  };

  const onChangeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeHandler2 = (event) => {
    setEditItem({
      ...editItem,
      [event.target.name]: event.target.value,
    });
  };

  const onClickHandler = (event) => {
    dispatch(examDateEdited(editItem, editItemIndex));
    setEditItemIndex(null);
  };
  
  return (
    <>
      <div className="bookExamAdminMain">
        <h1 className="bookExamAdminHeading">Booked Exams</h1>
        <div className="bookExamAdminData">
          {bookExamState.examDates.map((item) => (
            <>
              <h1>{item.courseName}</h1>
              <table border="1" width="50%">
                <tr>
                  <th>Student Name</th>
                  <th>Exam Date</th>
                </tr>
                {bookExamState.bookedDate.map((el) => (
                  <tr>
                    {el.bookedExam.map(
                      (i) =>
                        i.courseName === item.courseName && (
                          <>
                            <td>{el.studentName}</td>
                            <td>{i.date}</td>
                          </>
                        )
                    )}
                  </tr>
                ))}
              </table>
            </>
          ))}
          <br></br>
          <br></br>
        </div>
      </div>

      <div className="bookExamAdminMain">
        <h1 className="bookExamAdminHeading">Exam Dates</h1>
        <div className="bookExamAdminData">
          <h1>Exam Dates</h1>
          <table border="1" width="50%">
            <tr>
              <th>Course Name</th>
              <th>Date 1</th>
              <th>Date 2</th>
              <th>Actions</th>
            </tr>
            {bookExamState.examDates.map((item, index) => (
              <tr>
                <td>{item.courseName}</td>
                <td>{item.date1}</td>
                <td>{item.date2}</td>
                <td>
                  <button onClick={() => edit(item,index)}>Edit</button>
                </td>
              </tr>
            ))}
          </table>
          {(editItemIndex !== null && editItemIndex !== undefined) && <>
          <h1>EDIT</h1>
          <table border="1" width="50%">
            <tr>
              <th>Course Name</th>
              <td>
                <input
                  name="courseName"
                  defaultValue={editItem.courseName}
                  onChange={onChangeHandler2}
                />
              </td>
            </tr>
            <tr>
              <th>Date 1</th>
              <td>
                <input
                  name="date1"
                  defaultValue={editItem.date1}
                  onChange={onChangeHandler2}
                />
              </td>
            </tr>
            <tr>
              <th>Date 2</th>
              <td>
                <input
                  name="date2"
                  defaultValue={editItem.date2}
                  onChange={onChangeHandler2}
                />
              </td>
            </tr>
          </table>
          <button onClick={onClickHandler}>Save</button></>}
          <br></br>
          <br></br>
          <h1>Add</h1>
          <table border="1" width="50%">
            <tr>
              <th>Course Name</th>
              <td>
                <input
                  name="courseName"
                  placeholder="Course Name i.e (Algebra)"
                  onChange={onChangeHandler}
                />
              </td>
            </tr>
            <tr>
              <th>Date 1</th>
              <td>
                <input
                  name="date1"
                  placeholder="dd-mm-yyyy"
                  onChange={onChangeHandler}
                />
              </td>
            </tr>
            <tr>
              <th>Date 2</th>
              <td>
                <input
                  name="date2"
                  placeholder="dd-mm-yyyy"
                  onChange={onChangeHandler}
                />
              </td>
            </tr>
          </table>
          <button onClick={() => dispatch(examDateAdded(data))}>Save</button>
        </div>
      </div>
    </>
  );
};

export default BookExamAdmin;
