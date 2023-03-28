import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { courseUnregistered } from "./../../redux/actions/index";
import { useState } from "react";
import DeleteConfirmation from './../deleteConfirmation/DeleteConfirmation';

const ViewCourses = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const [show, setShow] = useState(false);
  const [course, setCourse] = useState();
  const [deleteItem, setDeleteItem] = useState();

  const handleDelete = (key,item) => {
    setCourse(key);
    setDeleteItem(item);
    setShow(true);
  }

  return (
    <>
      <DeleteConfirmation show={show} setShow={setShow} deleteFunc={courseUnregistered(course,deleteItem)}/>
      <Table bordered hover>
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
                      Delete
                    </button>
                  </td>
                </tr>
              ) : null
            )
          )}
        </tbody>
      </Table>
    </>
  );
};

export default ViewCourses;
