import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { leaveEdited } from './../../redux/actions/index';

const EditLeave = (props) => {
  const {show, setShow, id, course, newLeave, setNewLeave} = props;
  const dispatch = useDispatch();
  const onChangeHandler = (event) => {
    setNewLeave({
      ...newLeave,
      [event.target.name]:event.target.value
    })
  }
  const handleEdit = () => {
    dispatch(leaveEdited(course,id,newLeave));
    setShow(false);
  }
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Leave</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Leave From</Form.Label>
              <Form.Control
                name="LeaveFrom"
                type="date"
                defaultValue={newLeave.LeaveFrom}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Leave To</Form.Label>
              <Form.Control
                name="LeaveTo"
                type="date"
                defaultValue={newLeave.LeaveTo}
                onChange={onChangeHandler}
              />
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
}

export default EditLeave;