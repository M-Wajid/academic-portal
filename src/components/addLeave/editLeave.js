import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { leaveEdited } from './../../redux/actions/index';
import { useState } from 'react';

const EditLeave = (props) => {
  const {show, setShow, id, course, newLeave, setNewLeave} = props;
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const onChangeHandler = (event) => {
    setNewLeave({
      ...newLeave,
      [event.target.name]:event.target.value
    })
  }
  const handleEdit = () => {
    const fromDate = new Date(newLeave.LeaveFrom);
    const toDate = new Date(newLeave.LeaveTo);
    if(fromDate < toDate){
      dispatch(leaveEdited(course,id,newLeave));
      setShow(false);
      setError(false);
    } else{
      setError(true);
    }
    
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
                min={new Date().toISOString().split("T")[0]}
                defaultValue={newLeave.LeaveFrom}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Leave To</Form.Label>
              <Form.Control
                name="LeaveTo"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                defaultValue={newLeave.LeaveTo}
                onChange={onChangeHandler}
              />
              {error && <span className='span'>Leave To date should be greater than Leave from date</span>}
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