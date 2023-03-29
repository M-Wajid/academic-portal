import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const ShowAllMarks = () => {
  const marksState = useSelector((state) => state.marksReducer);
  const courseState = useSelector((state) => state.courseReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  return Object.keys(courseState).map(
    (key) =>
      courseState[key].length !== 0 &&
      !!courseState[key].find((el) => el.Name === user.name) && (
        <>
          <h1>{key}</h1>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Task Type</th>
                <th>Name</th>
                <th>Obtained Marks</th>
                <th>Total Marks</th>
              </tr>
            </thead>
            {Object.keys(marksState[key]).map((key2) => (
              <tbody>
                {marksState[key][key2].map((item) => (
                  <tr>
                    <td>{key2}</td>
                    <td>{item.Student_Name}</td>
                    <td>{item.Obtained_Marks}</td>
                    <td>{item.Total_Marks}</td>
                  </tr>
                ))}
              </tbody>
            ))}
          </Table>
        </>
      )
  );
};

export default ShowAllMarks;
