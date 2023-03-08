import React from 'react'
import { useSelector } from 'react-redux';

const ViewMarks = () => {
  const marksState = useSelector((state)=> state.marksReducer);
  return (
    <div>
      <table border="1" width="100%">
        <tbody>
          <tr>
            {Object.keys(marksState.marks[0]).map((key)=>(
              <th>{key}</th>
            ))}
          </tr>
          <tr>
            {marksState.marks.map((item) => Object.keys(item).map((key) => (
              <td>{item[key]}</td>
            )))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ViewMarks;