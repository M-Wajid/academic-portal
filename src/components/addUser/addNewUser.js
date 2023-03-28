import { useState } from "react";
import { useDispatch } from "react-redux";
import { userAdded } from "../../redux/actions/index";
import Table from "react-bootstrap/Table";
import { Form } from "react-bootstrap";

const AddNewUser = () => {
  const [singleUser, setSingleUser] = useState({});
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setSingleUser({
      ...singleUser,
      [event.target.name]: event.target.value,
    });
  };
  const onClickHandler = (event) => {
    event.preventDefault();
    dispatch(userAdded(singleUser));
    setFlag(false);
    setSingleUser({});
  }
  return (
    flag ?
    <Form onSubmit={onClickHandler}>
      <Table bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="off"
              required
              onChange={onChangeHandler}
            />
          </td>
          <td>
            <input
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="off"
              required
              onChange={onChangeHandler}
            />
          </td>
          <td>
            <select name="role" onChange={onChangeHandler}>
              <option>Please Select Role</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
          </td>
          <td>
            <input
              name="password"
              type="text"
              placeholder="Password"
              autoComplete="off"
              required
              onChange={onChangeHandler}
            />
          </td>
          <td>
            <button
              type="submit"
              className="Button"
            >
              Save
            </button>
          </td>
        </tr>
      </tbody>
    </Table> 
    </Form>
    
    :
    <button className="Button" onClick={() => setFlag(true)}>Add New User</button>
    
  );
};

export default AddNewUser;
