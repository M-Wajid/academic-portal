import { useState } from "react";
import { examDateAdded } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddExamDate = () => {
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const bookExamState = useSelector((state) => state.bookExamReducer);
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChangeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onClickHandler = () => {
    if (!!data.courseName && !!data.date1 && !!data.date2) {
      dispatch(examDateAdded(data));
    } else {
      alert("Please fill out all the fields");
    }
  };
  return (
    <>
      <button className="Button" onClick={handleShow}>
        Add Exam
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Exam</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Course Name</Form.Label>
              <select
                class="form-control"
                name="courseName"
                onChange={onChangeHandler}
              >
                <option>Please Select a Course</option>
                {Object.keys(courseState).map((key) =>
                  courseState[key].map(
                    (item1) =>
                      item1.Name === user.name &&
                      !bookExamState.examDates.find(
                        (item) => item.courseName === key
                      ) && <option value={key}>{key}</option>
                  )
                )}
              </select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date # 1</Form.Label>
              <input
                class="form-control"
                name="date1"
                type="date"
                placeholder="dd-mm-yyyy"
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date # 2</Form.Label>
              <input
                class="form-control"
                name="date2"
                type="date"
                placeholder="dd-mm-yyyy"
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

export default AddExamDate;
