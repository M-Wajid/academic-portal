import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { courseEdited } from './../../redux/actions/index';

const EditCourse = (props) => {
  const {show, setShow, editCourse, setEditCourse, oldCourse} = props;
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(courseEdited(oldCourse,editCourse));
    setShow(false);
  }
  const onChangeHandler = (event) => {
    setEditCourse(event.target.value)
  }
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                name="course"
                type="text"
                defaultValue={editCourse}
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
export default EditCourse