import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const ShowAllAttendace = (props) => {
  const { flag, addKeyValue, addStatus, edit } = props;
  const user = JSON.parse(localStorage.getItem("data"));
  const courseState = useSelector((state) => state.courseReducer);
  const attendanceState = useSelector((state) => state.attendanceReducer);
  return (
      Object.keys(courseState).map((key1) =>
        courseState[key1].map(
          (item) =>
            item.Name === user.name && (
              <>
              <h1>{key1}</h1>
              <button className="Button" onClick={() => setFlag(true)}>
              ADD
              </button>
              <Table bordered hover>
                <thead>
                  <tr>
                    {attendanceState[key1].length !== 0 &&
                      Object.keys(attendanceState).map(
                        (key) =>
                          key === key1 &&
                          Object.keys(attendanceState[key][0]).map((key) => (
                            <th>{key}</th>
                          ))
                      )}
                    {flag && (
                      <th>
                        <input
                          type="date"
                          onChange={addKeyValue}
                          placeholder="dd-mm-yyyy"
                        />
                      </th>
                    )}
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(attendanceState).map(
                    (key) =>
                      key === key1 &&
                      attendanceState[key].map((item, index) => (
                        <tr>
                          {Object.keys(item).map((key2) => (
                            <td>{item[key2]}</td>
                          ))}
                          {flag && (
                            <th>
                              <select
                                onChange={(event) => addStatus(index, event)}
                              >
                                <option>default</option>
                                <option value="P">P</option>
                                <option value="A">A</option>
                              </select>
                            </th>
                          )}
                          <td>
                            <button
                              className="Button"
                              onClick={() => edit(item, index)}
                            >
                              EDIT
                            </button>
                          </td>
                        </tr>
                      ))
                  )}
                </tbody>
              </Table>
              </>
            )
        )
      )
  );
};

export default ShowAllAttendace;
