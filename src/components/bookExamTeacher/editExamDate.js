import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { examDateEdited } from './../../redux/actions/index';

const EditExamDate = (props) => {
  const {show, setShow, editItem, setEditItem, editItemIndex} = props;
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    setEditItem({
      ...editItem,
      [event.target.name]: event.target.value,
    });
  };

  const handleEdit = (event) => {
    dispatch(examDateEdited(editItem, editItemIndex));
    setShow(false);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Exam Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Date 1</Form.Label>
              <Form.Control
                name="date1"
                type="date"
                defaultValue={editItem.date1}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Date 2</Form.Label>
              <Form.Control
                name="date2"
                type="date"
                defaultValue={editItem.date2}
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

export default EditExamDate