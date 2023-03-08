import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { userDeleted } from '../../redux/actions';

const Delete = () => {
  const userState = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  let temp = "";

  const onChangeHandler = (event) => {
    temp = event.target.value
  }

  const onClickHandler = () => {
    dispatch(userDeleted(temp));
    console.log(userState.users);
  }

  return (
    <div>
      <select name="name" onChange={onChangeHandler}>
        <option value="default">default</option>
        {userState.users.map((item)=>{
          return(
            <option value={item.name}>{item.name}</option>
          )
        })}
      </select>
      <button onClick={onClickHandler}>DELETE</button>
    </div>
  )
}

export default Delete