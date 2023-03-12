import { useState } from "react";
import { useDispatch } from "react-redux";
import { userAdded } from "../../redux/actions/index";
import { useSelector } from "react-redux";
import "./addUser.css";

const AddUser = () => {
  const [singleUser, setSingleUser] = useState({});
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer);

  const onChangeHandler = (event) => {
    setSingleUser({
      ...singleUser,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="addUserMain">
      <h1 className="addUserHeading">Add User</h1>
      <div className="addUserData">
        <table border="1" width="50%">
          <tbody>
            <tr>
              <th>Users</th>
              <th>Role</th>
            </tr>
            {users.users.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            autoComplete="off"
            onChange={onChangeHandler}
          />
          <input
            name="email"
            type="text"
            placeholder="Email"
            autoComplete="off"
            onChange={onChangeHandler}
          />
          <input
            name="role"
            type="text"
            placeholder="Role"
            autoComplete="off"
            onChange={onChangeHandler}
          />
          <input
            name="password"
            type="text"
            placeholder="Password"
            autoComplete="off"
            onChange={onChangeHandler}
          />
          <button
            className="addUserButton"
            onClick={() => dispatch(userAdded(singleUser))}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
