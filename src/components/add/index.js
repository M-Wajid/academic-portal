import React from 'react'
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { userAdded } from '../../redux/actions/index';
import { useSelector } from 'react-redux';

const Add = () => {
  const [singleUser,setSingleUser] = useState({});
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.userReducer)

  const onChangeHandler = (event) => {
    setSingleUser({
      ...singleUser,
      [event.target.name]: event.target.value
    })
  }
  const onClickHandler = () => {
    console.log(singleUser);
    dispatch(userAdded(singleUser));
    console.log(users.users)
  }
  return (
    <div>
      <input name='name' type='text' placeholder='Name' autoComplete='off' onChange={onChangeHandler}/>
      <input name='email' type='text' placeholder='Email' autoComplete='off' onChange={onChangeHandler}/>
      <input name='role' type='text' placeholder='Role' autoComplete='off' onChange={onChangeHandler}/>
      <input name='password' type='text' placeholder='Password' autoComplete='off' onChange={onChangeHandler}/>
      <button onClick={onClickHandler}>ADD</button>
    </div>
  )
}

export default Add