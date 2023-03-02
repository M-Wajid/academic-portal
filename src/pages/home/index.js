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
      />
      <input
        name="password"
        type="password"
        placeholder="PASSWORD"
      />
      <button onClick={onClickHandler}>
        LOGIN
      </button>
    </div>
  );
};

export default HOME;
