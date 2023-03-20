import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDeleted } from "../../redux/actions";
import "../../styles/style.css";

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
    <div className="Main">
      <h1 className="Heading">Delete User</h1>
      <div className="Data3">
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
          <button className="Button" onClick={onClickHandler}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
