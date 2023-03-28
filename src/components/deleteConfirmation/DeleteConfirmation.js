import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteConfirmation = (props) => {
  const {show, setShow, deleteFunc} = props;

  const handleClose = () => setShow(false);

  const handleDelete = () => {
    deleteFunc();
    setShow(false);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this data permanently?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            NO
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteConfirmation;

