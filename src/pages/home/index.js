import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HOME = () => {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const [foundUser,setFoundUser] = useState(undefined);
  const [currentUser, setCurrentUser] = useState({});
  const [emailFlag, setEmailFlag] = useState(false);
  const [passwordFlag, setPasswordFlag] = useState(false);

  const onChangeHandler = (event) => {
    setCurrentUser({
      ...currentUser,
      [event.target.name]: event.target.value,
    });
  };

  const check = (user) => {
    localStorage.setItem("data", JSON.stringify(user));
    switch (user.role) {
      case "admin":
        navigate("/admin");
        break;
      case "teacher":
        navigate("/teacher");
        break;
      case "student":
        navigate("/student");
        break;
      default:
        return console.log("User Role is not defined");
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    !!foundUser && 
    (foundUser.password === currentUser.password
      ? check(foundUser)
      : setPasswordFlag(true));
  };

  const onBlurHandler = () => {
    const user = userState.users.find((users) => users.email === currentUser.email)
    if (!user) {
      setEmailFlag(true);
    } else {
      setEmailFlag(false);
      setFoundUser(user);
    }
  };

  return (
    <div className="main">
      <form onSubmit={onSubmitHandler}>
        <div className="loginForm">
        <h1 style={{color:"#BFA181"}}>LOGIN</h1>
        <input
          className="inputFields"
          name="email"
          type="email"
          placeholder="EMAIL"
          autoComplete="off"
          onChange={onChangeHandler}
          required
          onBlur={onBlurHandler}
          emailFlag={emailFlag.toString()}
        />
        {emailFlag && <span className="span">user with this email doesn't exist</span>}

        <input
          className="inputFields"
          name="password"
          type="password"
          placeholder="PASSWORD"
          onChange={onChangeHandler}
          required
        />
        {passwordFlag && <span className="span">password is incorrect</span>}

        <button className="loginButton" type="submit">
          LOGIN
        </button>
        </div>
    </form>
    </div>
  );
};

export default HOME;
