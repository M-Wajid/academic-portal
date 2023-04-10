import { useDispatch, useSelector } from "react-redux";
import { attendanceDeletedSingle, courseMarksDeleted, courseUnregistered } from "./../../redux/actions/index";
import { useState } from "react";
import DeleteConfirmation from './../deleteConfirmation/DeleteConfirmation';
import { MdDelete } from "react-icons/md";

const ViewCourses = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const [show, setShow] = useState(false);
  const [course, setCourse] = useState();
  const [deleteItem, setDeleteItem] = useState();
  const dispatch = useDispatch();

  const handleDelete = (key,item) => {
    setCourse(key);
    setDeleteItem(item);
    setShow(true);
  }

  const deleteFunc = () => {
    dispatch(courseUnregistered(course,deleteItem));
    dispatch(attendanceDeletedSingle(course,user.name));
    dispatch(courseMarksDeleted(course,user.name));
  }

  return (
    <>
      <DeleteConfirmation show={show} setShow={setShow} deleteFunc={deleteFunc}/>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Courses</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(courseState).map((key) =>
            courseState[key].map((item) =>
              item.Name === user.name ? (
                <tr>
                  <td>{key}</td>
                  <td>
                    <button
                      className="Button"
                      onClick={() => handleDelete(key,item)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ) : null
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default ViewCourses;
