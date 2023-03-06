import { Navigate } from 'react-router-dom';

const CURRENT_USER = 'student';

export const StudentElement = ({children}) => {
  if (CURRENT_USER === 'student') {
    return <>{children}</>
  } else {
    return <Navigate to="/" />
  }
}

export const TeacherElement = ({children}) => {
  if (CURRENT_USER === 'teacher') {
    return <>{children}</>
  } else {
    return <Navigate to="/" />
  }
}

export const AdminElement = ({children}) => {
  if (CURRENT_USER === 'admin') {
    return <>{children}</>
  } else {
    return <Navigate to="/" />
  }
}