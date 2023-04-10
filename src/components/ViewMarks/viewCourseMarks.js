import { useSelector } from "react-redux";

const ViewCourseMarks = (props) => {
  const user = JSON.parse(localStorage.getItem("data"));
  const marksState = useSelector((state) => state.marksReducer);
  const { course } = props;
  return (
    <>
      <h2>{course}</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Task Type</th>
            <th>Obtained Marks</th>
            <th>Total Marks</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(marksState).map((key) =>
            key === course
              ? Object.keys(marksState[key]).map((item) =>
                  marksState[key][item].map((el) =>
                    el.Student_Name === user.name ? (
                      <tr>
                        <th>{item}</th>
                        <td>{el.Obtained_Marks}</td>
                        <td>{el.Total_Marks}</td>
                      </tr>
                    ) : null
                  )
                )
              : null
          )}
        </tbody>
      </table>
    </>
  );
};

export default ViewCourseMarks;
