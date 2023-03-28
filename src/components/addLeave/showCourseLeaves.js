import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { leaveDeleted } from "../../redux/actions";

const ShowCourseLeaves = (props) => {
  const leaveState = useSelector((state) => state.leaveReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const { course } = props;
  const dispatch = useDispatch();
  return (
    Object.keys(leaveState).includes(course) && (
      <Table bordered hover>
        <thead>
          <th>Student Name</th>
          <th>Teacher Name</th>
          <th>Leave From</th>
          <th>Leave To</th>
          <th>Teacher Approval</th>
          <th>Admin Approval</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {Object.keys(leaveState).map(
            (key) =>
              key === course &&
              leaveState[key].map(
                (item) =>
                  item.StudentName === user.name && (
                    <tr>
                      {Object.keys(item).map(
                        (el) => el !== "id" && <td>{item[el]}</td>
                      )}
                      <td><button className="Button">Edit</button>
                      <button className="Button" onClick={() => dispatch(leaveDeleted(key,item.id))}>Delete</button></td>
                    </tr>
                  )
              )
          )}
        </tbody>
      </Table>
    )
  );
};

export default ShowCourseLeaves;
