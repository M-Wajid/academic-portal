import { examDateEdited } from '../../redux/actions/index';
import { useDispatch} from "react-redux";

const EditExamDate = (props) => {
  const dispatch = useDispatch();
  const { editItem, setEditItem, editItemIndex, setEditItemIndex } = props;
  const onChangeHandler2 = (event) => {
    setEditItem({
      ...editItem,
      [event.target.name]: event.target.value,
    });
  };

  const onClickHandler = (event) => {
    dispatch(examDateEdited(editItem, editItemIndex));
    setEditItemIndex(null);
  };
  return (
    <>
          <h1>EDIT</h1>
          <table border="1" width="50%">
            <tr>
              <th>Course Name</th>
              <td>
                <input
                  name="courseName"
                  defaultValue={editItem.courseName}
                  onChange={onChangeHandler2}
                />
              </td>
            </tr>
            <tr>
              <th>Date 1</th>
              <td>
                <input
                  name="date1"
                  type="date"
                  defaultValue={editItem.date1}
                  onChange={onChangeHandler2}
                />
              </td>
            </tr>
            <tr>
              <th>Date 2</th>
              <td>
                <input
                  name="date2"
                  type="date"
                  defaultValue={editItem.date2}
                  onChange={onChangeHandler2}
                />
              </td>
            </tr>
          </table>
          <button className="Button" onClick={onClickHandler}>Save</button>
          </>
  )
}

export default EditExamDate