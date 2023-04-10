import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { courseAdded } from "./../../redux/actions/index";
import EditCourse from "./editCourse";
import { MdCreate } from "react-icons/md";

const AddCourse = () => {
  const courseState = useSelector((state) => state.courseReducer);
  const [course, setCourse] = useState("");
  const [oldCourse, setOldCourse] = useState();
  const [editCourse, setEditCourse] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setCourse(event.target.value);
  };

  const handleEdit = (key) => {
    setEditCourse(key);
    setOldCourse(key);
    setShow(true);
  };

  const onClickHandler = () => {
    if (!courseState[course]) {
      if ([...course].length > "2") {
        dispatch(courseAdded(course));
      } else {
        alert("Please enter a course name with atleast 3 characters");
      }
    } else {
      alert("Course already exists");
    }
  };

  return (
    <div className="Main">
      <h1 className="Heading">Add Course</h1>
      <div className="Data3">
        <div className="Data">
          <input
            type="text"
            placeholder="Course Name"
            onChange={onChangeHandler}
            class="form-control"
          />
          <button className="Button" onClick={onClickHandler}>
            Add
          </button>
        </div>
        <EditCourse
          show={show}
          setShow={setShow}
          editCourse={editCourse}
          setEditCourse={setEditCourse}
          oldCourse={oldCourse}
        />
        <table className="styled-table">
          <thead>
            <tr>
              <th>Courses</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(courseState).map((key) => (
              <tr>
                <td>{key}</td>
                {courseState[key].length === 0 ? (
                  <td>
                    <button className="Button" onClick={() => handleEdit(key)}>
                      <MdCreate />
                    </button>
                  </td>
                ) : (
                  <td>No actions granted</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCourse;
