
import { useDispatch, useSelector } from "react-redux";
import "../../styles/style.css";
import Table from 'react-bootstrap/Table';
import AddNewUser from "./addNewUser";
import DeleteConfirmation from './../deleteConfirmation/DeleteConfirmation';
import { useState } from 'react';
import {
  attendanceDeleted,
  userDeleted,
  userMarksDeleted,
  userUnregistered,
} from "../../redux/actions";

const AddUser = () => {
  const users = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState();

  const onClickHandler = (name) => {
    setName(name);
    setShow(true);
  };

  const deleteFunc = () => {
    dispatch(userDeleted(name));
    dispatch(userUnregistered(name));
    dispatch(attendanceDeleted(name));
    dispatch(userMarksDeleted(name));
  }

  return (
    <div className="Main">
      <h1 className="Heading">Add User</h1>
      <div className="Data3">
        <AddNewUser />
        <DeleteConfirmation show={show} setShow={setShow} deleteFunc={deleteFunc}/>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Users</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
            <tbody>
            {users.users.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.role}</td>
                {item.role === 'admin' ? <td>No Actions</td> : <td><button className="Button" onClick={() => onClickHandler(item.name)}>Delete</button></td>}
              </tr>
            ))}
          </tbody>
        </Table>       
      </div>
    </div>
  );
};

export default AddUser;
