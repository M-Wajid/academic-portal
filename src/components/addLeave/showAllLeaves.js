import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { leaveDeleted } from "../../redux/actions";
import { useState } from "react";
import DeleteConfirmation from './../deleteConfirmation/DeleteConfirmation';

const ShowAllLeaves = () => {
  const leaveState = useSelector((state) => state.leaveReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [course, setCourse] = useState();
  const [deleteID, setDeleteID] = useState();

  const handleDelete = (key,id) => {
    setCourse(key);
    setDeleteID(id);
    setShow(true);
  }
  return (
    <>
    <DeleteConfirmation show={show} setShow={setShow} deleteFunc={leaveDeleted(course,deleteID)}/>
    <Table bordered hover>
      <thead>
        <th>Course</th>
        <th>Student Name</th>
        <th>Teacher Name</th>
        <th>Leave From</th>
        <th>Leave To</th>
        <th>Teacher Approval</th>
        <th>Admin Approval</th>
        <th>Actions</th>
      </thead>
      <tbody>
        {Object.keys(leaveState).map((key) =>
          leaveState[key].map(
            (item) =>
              item.StudentName === user.name && (
                <tr>
                  <td>{key}</td>
                  {Object.keys(item).map(
                    (el) => el !== "id" && <td>{item[el]}</td>
                  )}
                  <td>
                    <button className="Button">Edit</button>
                    <button className="Button" onClick={() => handleDelete(key,item.id)}>Delete</button>
                  </td>
                </tr>
              )
          )
        )}
      </tbody>
    </Table>
    </>
  );
};

export default ShowAllLeaves;
