import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const HOME = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/student");
  }


  return (
    <div className="main">
      <h1>LOGIN</h1>
      <input
        name="email"
        type="text"
        placeholder="EMAIL"
        autoComplete="off"
        style={{
          width: "50%",
          marginBottom: "20px",
          padding: "10px 10px 10px 10px",
        }}
      />
      <input
        name="password"
        type="password"
        placeholder="PASSWORD"
        style={{
          width: "50%",
          marginBottom: "20px",
          padding: "10px 10px 10px 10px",
        }}
      />
      <button
        style={{
          width: "52%",
          marginBottom: "20px",
          padding: "10px 10px 10px 10px",
          background: "rgb(0, 179, 255)",
          color: "White",
          fontWeight: "Bold",
          fontSize: "20px",
          border: "none",
          borderRadius: "100px",
          cursor: "pointer"
        }}
        onClick={onClickHandler}
      >
        LOGIN
      </button>
    </div>
  );
};

export default HOME;
