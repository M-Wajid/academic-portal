import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { attendanceEdited } from "../../redux/actions";
import { useState } from "react";

const EditAttendance = (props) => {
  const { show, setShow, data, setData, index, course } = props;
  const [date, setDate] = useState(undefined);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setData({
      ...data,
      [date]: event.target.value,
    });
  };
  const handleEdit = () => {
    dispatch(attendanceEdited(course, index, data));
    setShow(false);
  };
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Attendance</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <input class="form-control" type="date" min={Object.keys(data)[Object.keys(data).length-4]} max={Object.keys(data)[Object.keys(data).length-1]} onChange={(event) => setDate(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <select class="form-control" name={date} value={data[date]} onChange={onChangeHandler}>
                <option value="P">P</option>
                <option value="A">A</option>
              </select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditAttendance;
