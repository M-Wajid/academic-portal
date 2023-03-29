import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { attendanceEdited } from "../../redux/actions";

const EditAttendance = (props) => {
  const { show, setShow, data, setData, index, course } = props;
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleEdit = () => {
    console.log(data);
    dispatch(attendanceEdited(course, index, data));
    setShow(false);
  };
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Leave</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {Object.keys(data).map(
              (key) =>
                key !== "Name" && (
                  <Form.Group className="mb-3">
                    <Form.Label>{key}</Form.Label>
                    <Form.Control
                      name={key}
                      type="text"
                      placeholder={data[key]}
                      onChange={onChangeHandler}
                    />
                  </Form.Group>
                )
            )}
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
