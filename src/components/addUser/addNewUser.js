import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAdded } from "../../redux/actions/index";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AddNewUser = () => {
  const userState = useSelector((state) => state.userReducer);
  const [singleUser, setSingleUser] = useState({});
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeHandler = (event) => {
    setSingleUser({
      ...singleUser,
      [event.target.name]: event.target.value,
    });
  };
  const onClickHandler = (event) => {
    if (!userState.users.find((item) => item.email === singleUser.email)) {
      if (Object.keys(singleUser).length === 4) {
        dispatch(userAdded(singleUser));
        setSingleUser({});
        setShow(false);
      } else {
        alert("Please fill out all the fields");
      }
    } else {
      alert(
        "User with this email already exists. Please enter a different email"
      );
    }
  };
  return (
    <>
      <button className="Button" onClick={handleShow}>
        Add User
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <input
                class="form-control"
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="off"
                required
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <input
                class="form-control"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="off"
                required
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Role</Form.Label>
              <select
                class="form-control"
                name="role"
                onChange={onChangeHandler}
              >
                <option>Please Select Role</option>
                <option value="admin">Admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <input
                class="form-control"
                name="password"
                type="text"
                placeholder="Password"
                autoComplete="off"
                required
                onChange={onChangeHandler}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onClickHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddNewUser;
