
import { useDispatch, useSelector } from "react-redux";
import "../../styles/style.css";
import AddNewUser from "./addNewUser";
import DeleteConfirmation from './../deleteConfirmation/DeleteConfirmation';
import { useState } from 'react';
import EditUser from './editUser';
import {
  attendanceDeleted,
  userDeleted,
  userMarksDeleted,
  userUnregistered,
} from "../../redux/actions";
import "../../styles/table-style.css";
import { MdDelete } from "react-icons/md";
import { MdCreate } from "react-icons/md";

const AddUser = () => {
  const users = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [editItem, setEditItem] = useState({"name": "", "email": "", "password": ""});
  const [name, setName] = useState();

  const onClickHandler = (name) => {
    setName(name);
    setShow(true);
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setShow1(true);
  }

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
        <EditUser show={show1} setShow={setShow1} item={editItem} setItem={setEditItem}/>
        <DeleteConfirmation show={show} setShow={setShow} deleteFunc={deleteFunc}/>
        <table className="styled-table">
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
                <td>
                <button className="Button" onClick={() => handleEdit(item)}><MdCreate /></button>
                {item.role !== 'admin' && <button className="Button" onClick={() => onClickHandler(item.name)}><MdDelete /></button>}
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>       
      </div>
    </div>
  );
};

export default AddUser;
