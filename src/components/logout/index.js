import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <button className="headerButton" onClick={onClickHandler}>
              Log out
    </button>
  )
}

export default Logout;