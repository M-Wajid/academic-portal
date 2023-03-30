import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { leaveAdded } from "../../redux/actions/index";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddNewLeave = () => {
  const courseState = useSelector((state) => state.courseReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const [course, setCourse] = useState("default");
  const [newLeave, setNewLeave] = useState({});
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeHandler = (event) => {
    setNewLeave({
      ...newLeave,
      [event.target.name]: event.target.value,
    });
  };

  const onClickHandler = (event) => {
    if (course !== "default" && Object.keys(newLeave).length === 2){
      dispatch(leaveAdded(newLeave, course, courseState[course]));
      setShow(false);
      setNewLeave({});
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <>
      <button className="Button" onClick={handleShow}>
        Add New Leave
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Leave</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <select
                class="form-control"
                onChange={(event) => setCourse(event.target.value)}
              >
                <option value="default">Please select a Course</option>
                {Object.keys(courseState).map((key) =>
                  courseState[key].map(
                    (item) =>
                      item.Name === user.name &&
                      !!courseState[key].find(
                        (item) => item.role === "teacher"
                      ) && <option value={key}>{key}</option>
                  )
                )}
              </select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Leave From</Form.Label>
              <Form.Control
                name="LeaveFrom"
                type="date"
                onChange={onChangeHandler}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Leave To</Form.Label>
              <Form.Control
                name="LeaveTo"
                type="date"
                onChange={onChangeHandler}
                required
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

export default AddNewLeave;

  

  