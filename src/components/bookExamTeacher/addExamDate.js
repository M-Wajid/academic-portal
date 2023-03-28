import { useState } from "react";
import { examDateAdded } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const AddExamDate = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const bookExamState = useSelector((state) => state.bookExamReducer);
  const [data, setData] = useState({});
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onClickHandler = () => {
    !!data.courseName &&
      !!data.date1 &&
      !!data.date2 &&
      dispatch(examDateAdded(data));
    setFlag(false);
  };
  return flag ? (
    <>
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
          <tr>
            <td>
              <select name="courseName" onChange={onChangeHandler}>
                <option>Please Select a Course</option>
                {Object.keys(courseState).map((key) =>
                  courseState[key].map(
                    (item1) =>
                      item1.Name === user.name &&
                      !bookExamState.examDates.find(
                        (item) => item.courseName === key) && (
                            <option value={key}>{key}</option>
                          )
                  )
                )}
              </select>
            </td>
            <td>
              <input
                name="date1"
                type="date"
                placeholder="dd-mm-yyyy"
                onChange={onChangeHandler}
              />
            </td>
            <td>
              <input
                name="date2"
                type="date"
                placeholder="dd-mm-yyyy"
                onChange={onChangeHandler}
              />
            </td>
            <td>
              <button className="Button" onClick={onClickHandler}>
                Save
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  ) : (
    <button className="Button" onClick={() => setFlag(true)}>
      Add Exam Date
    </button>
  );
};

export default AddExamDate;
