import { useSelector } from "react-redux";
import "../../styles/style.css";
import "../../styles/table-style.css"

const ShowUser = () => {
  const userState = useSelector((state) => state.userReducer);

  return (
    <div className="Main">
      <h1 className="Heading">All Users</h1>
      <div className="Data">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Users</th>
              <th>Role</th>
            </tr>
          </thead>
            
            <tbody>
            {userState.users.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowUser;
