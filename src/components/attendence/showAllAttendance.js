import { useSelector } from "react-redux";

const ShowAllAttendance = () => {
  const attendanceState = useSelector((state) => state.attendanceReducer);
  const courseState = useSelector((state) => state.courseReducer);
  const user = JSON.parse(localStorage.getItem("data"));
  return (
    <>
      {Object.keys(courseState).map(
        (key) =>
          courseState[key].length !== 0 &&
          !!courseState[key].find((el) => el.Name === user.name) && (
            <>
              <h1>{key}</h1>
              {!!attendanceState[key] &&
              attendanceState[key].length !== 0 && (
                <table className="styled-table">
                  <thead>
                    <tr>
                      {Object.keys(attendanceState[key][0]).map((item) => (
                        <th>{item}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceState[key].map((item) => (
                      <tr>
                        {Object.values(item).map((i) => (
                          <td>{i}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </>
          )
      )}
    </>
  );
};

export default ShowAllAttendance;
