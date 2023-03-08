import React from 'react'
import { useSelector } from 'react-redux';

const ViewAttendence = () => {
  const attendanceState = useSelector((state)=> state.attendanceReducer);
  return (
    <div>
      <table border="1" width="100%">
        <tbody>
          <tr>
            {Object.keys(attendanceState.attendance[0]).map((key)=>(
              <th>{key}</th>
            ))}
          </tr>
          <tr>
            {attendanceState.attendance.map((item) => Object.keys(item).map((key) => (
              <td>{item[key]}</td>
            ))
            )}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ViewAttendence