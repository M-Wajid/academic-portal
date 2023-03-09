import { useNavigate } from 'react-router-dom';
import './logout.css'

const Logout = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <button className='logoutButton' onClick={onClickHandler}>LOG OUT</button>
    </div>
  )
}

export default Logout;