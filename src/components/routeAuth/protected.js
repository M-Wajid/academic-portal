import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const _user = localStorage.getItem("data");
  if (_user) {
    const user = JSON.parse(_user);
    if (user) {
      return {
        auth: true,
        role: user.role,
      };
    } else {
      return {
        auth: false,
        role: null,
      };
    }
  } else {
    return { auth: false };
  }
};

const Protected = (props) => {
  const {userRole} = props
  const { auth, role } = useAuth();
  return auth ? role===userRole ? <Outlet /> : <Navigate to="/denied" /> : <Navigate to="/" />;
};

export default Protected;
