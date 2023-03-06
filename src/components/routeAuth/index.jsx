import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
  const {Component} = props;
  const navigate = useNavigate();

  useEffect(()=>{
    let currentUser = localStorage.getItem('data');
    if(currentUser === null){
      console.log(currentUser);
      navigate('/');
    }
  },[])
  return (
    <div>
      <Component />
    </div>
  )
}

export default Protected;