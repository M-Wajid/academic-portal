import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { marksAdded } from "./../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

const AddMarks = (props) => {
  const { course, taskType } = props;
  const marksState = useSelector(state => state.marksReducer);
  const courseState = useSelector(state => state.courseReducer);
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const setNewData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onClickHandler = () => {
    if(Object.keys(data).length === 3){
      dispatch(marksAdded(course, taskType, data));
      setShow(false);
    } else{
      alert("Please fill out all the fields");
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="Button" onClick={handleShow}>
        Add Marks
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Marks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Student Name</Form.Label>
              <select name="Student_Name" class="form-control" onChange={setNewData}>
                <option>Please Select Student</option>
                {courseState[course].map(item => item.role!=="teacher" && (!marksState[course][taskType].find(el => el.Student_Name === item.Name) && <option value={item.Name}>{item.Name}</option>))}
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Obtained Marks</Form.Label>
              <input
                class="form-control"
                name="Obtained_Marks"
                type="text"
                onChange={setNewData}
                placeholder="Obtained_Marks"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Total Marks</Form.Label>
              <input
                class="form-control"
                name="Total_Marks"
                type="text"
                onChange={setNewData}
                placeholder="Total_Marks"
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

export default AddMarks;
