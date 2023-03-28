import Info from "./../../components/info/index";
import UnregisterUser from './../../components/unregisterUser/index';
import AssignTeacher from './../../components/assignTeacher/index';

const Admin = () => {
  return (
    <div>
      <Info />
      <AssignTeacher />
      <UnregisterUser/>
    </div>
  );
};

export default Admin;
