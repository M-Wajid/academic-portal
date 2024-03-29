import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { marksEdited } from "../../redux/actions";

const EditMarks = (props) => {
  const { course, taskType, show, setShow, orignalData } = props;
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  
  const onClickHandler = () => {
    if(!error){
      dispatch(marksEdited(course, taskType, orignalData, data));
      setData({});
      setShow(false);
    }
  };

  const onBlurHandler = () => {
    if(parseInt(data.Obtained_Marks) > parseInt(data.Total_Marks)){
      setError(true);
    }else{
      setError(false);
    }
  }

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Marks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Obtained Marks</Form.Label>
              <input
                class="form-control"
                name="Obtained_Marks"
                type="number"
                min="0"
                max="100"
                onChange={(event) =>
                  setData({
                    ...data,
                    [event.target.name]:
                      event.target.value,
                  })
                }
                placeholder="Obtained_Marks"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Total Marks</Form.Label>
              <input
                class="form-control"
                name="Total_Marks"
                type="number"
                min="0"
                max="100"
                onBlur={onBlurHandler}
                onChange={(event) =>
                  setData({
                    ...data,
                    [event.target.name]:
                      event.target.value,
                  })
                }
                placeholder="Total_Marks"
              />
              {error && <span className="span">Obtained Marks should be less than or equal to Total Marks</span>}
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

export default EditMarks;
