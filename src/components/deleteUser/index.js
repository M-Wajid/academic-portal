import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDeleted } from "../../redux/actions";
import "./deleteUser.css";

const DeleteUser = () => {
  const userState = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  let temp = "";

  const onChangeHandler = (event) => {
    temp = event.target.value;
  };

  const onClickHandler = () => {
    dispatch(userDeleted(temp));
    console.log(userState.users);
  };

  return (
    <div className="deleteUserMain">
      <h1 className="deleteUserHeading">Delete User</h1>
      <div className="deleteUserData">
        <table border="1" width="50%">
          <tbody>
            <tr>
              <th>Users</th>
              <th>Role</th>
            </tr>
            {userState.users.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <select name="name" onChange={onChangeHandler}>
            <option value="default">default</option>
            {userState.users.map(
              (item) =>
                item.role !== "admin" && (
                  <option value={item.name}>{item.name}</option>
                )
            )}
          </select>
          <button className="deleteUserButton" onClick={onClickHandler}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
