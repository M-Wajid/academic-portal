import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const _user = localStorage.getItem("data");
  if (_user) {
    return { auth: true };
  } else {
    return { auth: false };
  }
};

const ProtectedLogin = () => {
  const {auth} = useAuth();
  return auth ? <Navigate to="/denied" /> : <Outlet /> ;
};

export default ProtectedLogin;
