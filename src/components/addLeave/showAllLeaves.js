import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { leaveDeleted } from "../../redux/actions";
import { useState } from "react";
import DeleteConfirmation from './../deleteConfirmation/DeleteConfirmation';
import EditLeave from "./editLeave";

const ShowAllLeaves = () => {
  const leaveState = useSelector((state) => state.leaveReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [course, setCourse] = useState();
  const [deleteID, setDeleteID] = useState();
  const [newLeave, setNewLeave] = useState({leaveFrom: "", LeaveTo: ""});
  const dispatch = useDispatch();

  const handleDelete = (key,id) => {
    setCourse(key);
    setDeleteID(id);
    setShow(true);
  }

  const handleEdit = (key,item) => {
    setNewLeave({"LeaveFrom":item.LeaveFrom, "LeaveTo":item.LeaveTo});
    setCourse(key);
    setDeleteID(item.id);
    setShow1(true);
  }
  const deleteFunc = () => {
    dispatch(leaveDeleted(course,deleteID));
  }

  return (
    <>
    <EditLeave show={show1} setShow={setShow1} id={deleteID} course={course} newLeave={newLeave} setNewLeave={setNewLeave}/>
    <DeleteConfirmation show={show} setShow={setShow} deleteFunc={deleteFunc}/>
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
                    <button className="Button" onClick={() => handleEdit(key,item)}>Edit</button>
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
