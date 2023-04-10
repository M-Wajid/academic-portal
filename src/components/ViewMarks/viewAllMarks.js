import { useSelector } from "react-redux";

const ViewAllMarks = () => {
  const marksState = useSelector((state) => state.marksReducer);
  const user = JSON.parse(localStorage.getItem("data"));

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Task Type</th>
          <th>Obtained Marks</th>
          <th>Total Marks</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(marksState).map((key) =>
          Object.keys(marksState[key]).map((item) => 
              marksState[key][item].map((el) =>
                el.Student_Name === user.name ? (
                  <tr>
                    <th>{key}</th>
                    <td>{item}</td>
                    <td>{el.Obtained_Marks}</td>
                    <td>{el.Total_Marks}</td>
                  </tr>
                ) : null
              )
          )
        )}
      </tbody>
    </table>
  );
};

export default ViewAllMarks;
