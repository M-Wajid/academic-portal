import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./home.css";

const HOME = () => {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  let [currentUser, setCurrentUser] = useState({});

  const onChangeHandler = (event) => {
    setCurrentUser({
      ...currentUser,
      [event.target.name]: event.target.value,
    });
  };

  const check = (user) => {
    switch(user.role){
      case ("admin"):
        navigate("/admin");
        break;
      case ("teacher"):
        navigate("/teacher");
        break;
      case ("student"):
        navigate("/student");
        break;
      default: return console.log("User Role is not defined");
    }
  }

  const onClickHandler = () => {
    const user = userState.users.find(
      (users) => users.email === currentUser.email
    );
    console.log(user);
    user.password === currentUser.password
      ? check(user)
      : console.log("password incorrect");
  };

  return (
    <div className="main">
      <h1>LOGIN</h1>
      <input
        name="email"
        type="text"
        placeholder="EMAIL"
        autoComplete="off"
        onChange={onChangeHandler}
      />
      <input name="password" type="password" placeholder="PASSWORD" />
      <button onClick={onClickHandler}>LOGIN</button>
    </div>
  );
};

export default HOME;
