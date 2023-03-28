
import { useDispatch, useSelector } from "react-redux";
import "../../styles/style.css";
import Table from 'react-bootstrap/Table';
import AddNewUser from "./addNewUser";
import {
  attendanceDeleted,
  userDeleted,
  userUnregistered,
} from "../../redux/actions";

const AddUser = () => {
  const users = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const onClickHandler = (name) => {
    dispatch(userDeleted(name));
    dispatch(userUnregistered(name));
    dispatch(attendanceDeleted(name));
  };

  return (
    <div className="Main">
      <h1 className="Heading">Add User</h1>
      <div className="Data3">
        <AddNewUser />
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
