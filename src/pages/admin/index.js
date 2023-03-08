import React from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css"

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
        <button className="buttonStyle" onClick={() => navigate("/add")}>Add User</button>
        <button className="buttonStyle" onClick={() => navigate("/delete")}>Delete User</button>
        <button className="buttonStyle" onClick={navigate("/")}>Create Class</button>
        <button className="buttonStyle" onClick={navigate("/")}>Delete Class</button>
    </div>
  );
};

export default Admin;
