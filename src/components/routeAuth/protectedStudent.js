import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedStudent = (props) => {
  const {Component} = props;
  const navigate = useNavigate();

  useEffect(()=>{
    let currentUser = localStorage.getItem('data');
    if(currentUser === null){
      console.log(currentUser);
      navigate('/');
    }
  })
  const user = JSON.parse(localStorage.getItem("data"));
  return user.role === "student" && <Component />
}

export default ProtectedStudent;