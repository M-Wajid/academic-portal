import { useSelector, useDispatch } from "react-redux";
import { examBooked } from './../../redux/actions/index';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AddExam = () => {
  const courseState = useSelector((state) => state.courseReducer);
  const bookExamState = useSelector((state) => state.bookExamReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const [course, setCourse] = useState("default");
  const [date, setDate] = useState("default");
  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    if(date !== "default"){
      dispatch(examBooked(user.name, course, date));
      setShow(false);
    }else{
      alert("Please fill out all fields");
    } 
    
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="Button" onClick={handleShow}>
        Book Exam
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book New Exam</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <select class="form-control" onChange={(event) => setCourse(event.target.value)}>
                <option value="default" >Please select a Course</option>
                {Object.keys(courseState).map((key) =>
                  courseState[key].map(
                    (item) =>
                      item.Name === user.name &&
                      bookExamState.examDates.map(
                        (item) =>
                          item.courseName === key && <option value={key}>{key}</option>
                      )
                  )
                )}
              </select>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Email address</Form.Label>
              <select class="form-control" onChange={(event) => setDate(event.target.value)}>
                <option value="default">Please select exam date</option>
                {bookExamState.examDates.map(
                  (item) =>
                    item.courseName === course && (
                      <>
                        <option value={item.date1}>{item.date1}</option>
                        <option value={item.date2}>{item.date2}</option>
                      </>
                    )
                )}
              </select>
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
}

export default AddExam;