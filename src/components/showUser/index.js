import { useSelector } from "react-redux";
import "../../styles/style.css";
import Table from 'react-bootstrap/Table';

const ShowUser = () => {
  const userState = useSelector((state) => state.userReducer);

  return (
    <div className="Main">
      <h1 className="Heading">All Users</h1>
      <div className="Data">
        <Table bordered hover>
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
        </Table>
      </div>
    </div>
  );
};

export default ShowUser;
