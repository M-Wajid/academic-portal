import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { bookedExamDeleted } from "../../redux/actions";
import { useState } from 'react';
import DeleteConfirmation from './../deleteConfirmation/DeleteConfirmation';

const BookedExams = () => {
  const bookExamState = useSelector((state) => state.bookExamReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  const handleDelete = (id) => {
    setId(id)
    setShow(true);
  }


  return (
    <>
      <DeleteConfirmation show={show} setShow={setShow} deleteFunc={bookedExamDeleted(id)}/>
      <h1>Booked Exams</h1>
      {bookExamState.bookedExam.length !== 0 ? (
        <Table bordered hover>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookExamState.bookedExam.map(
              (item) =>
                item.studentName === user.name && (
                  <tr>
                    <td>{item.courseName}</td>
                    <td>{item.date}</td>
                    <td>
                      <button className="Button">Edit</button>
                      <button
                        className="Button"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </Table>
      ): <p>NO Exams Booked</p>}
    </>
  );
};

export default BookedExams;