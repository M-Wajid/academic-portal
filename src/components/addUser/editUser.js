import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { userEdited } from '../../redux/actions';

const EditUser = (props) => {
  const {show, setShow, item, setItem} = props;
  const dispatch = useDispatch();

  const handleEdit = () => {
    console.log(item)
    dispatch(userEdited(item));
    setShow(false);
  }
  const onChangeHandler = (event) => {
    setItem({
      ...item,
     [event.target.name]:event.target.value
    })
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
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                defaultValue={item.name}
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="text"
                defaultValue={item.password}
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
export default EditUser;