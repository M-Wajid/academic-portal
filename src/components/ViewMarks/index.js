import { useSelector } from "react-redux";
import { useState } from "react";
import "../../styles/style.css";

const ViewMarks = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const marksState = useSelector((state) => state.marksReducer);
  const [course, setCourse] = useState();
  const onChangeHandler = (event) => {
    setCourse(event.target.value);
  };
  return (
    <div className="Main">
      <h1 className="Heading">Marks</h1>
      <div className="Data3">
        <select name="course" onChange={onChangeHandler}>
          <option value="default">default</option>
          {Object.keys(courseState).map((key) =>
            courseState[key].map((item) =>
              item.Name === user.name ? (
                <option value={key}>{key}</option>
              ) : null
            )
          )}
        </select>
        <br></br>
        <br></br>
        {course === null ||
        course === undefined ||
        course === "default" ? null : (
          <table border="1" width="50%">
            <tbody>
              <tr>
                <th>....</th>
                <th>Obtained Marks</th>
                <th>Total Marks</th>
              </tr>
              {Object.keys(marksState).map((key) =>
                key === course
                  ? Object.keys(marksState[key]).map((item) => (
                      <tr>
                        <th>{item}</th>
                        {marksState[key][item].map((el) =>
                          el.Student_Name === user.name ? (
                            <>
                              <td>{el.Obtained_Marks}</td>
                              <td>{el.Total_Marks}</td>
                            </>
                          ) : null
                        )}
                      </tr>
                    ))
                  : null
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewMarks;
