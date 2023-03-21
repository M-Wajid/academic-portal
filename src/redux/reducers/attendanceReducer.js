const initialState = {
  Algebra: [
    {Name: "Wajid" , "01-03-2023": "P", "02-03-2023": "A", "03-03-2023": "P", "04-03-2023": "P"},
    {Name: "Hammad" , "01-03-2023": "P", "02-03-2023": "P", "03-03-2023": "A", "04-03-2023": "P"}
  ],
  Calculus: [
    {Name: "Wajid" , "01-03-2023": "A", "02-03-2023": "P", "03-03-2023": "A", "04-03-2023": "P"}
  ]
}

const attendanceReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_ATTENDANCE":
      Object.keys(state).map((key) => key === action.course && state[key].map((item,index) => item[action.keyValue] =  action.status[index]))
      return {
        ...state,
      }
    case "ADD_STUDENT":
      let key = action.course;
      let flag = Object.keys(state).includes(action.course);
      let temp = {};
      flag === true ? (
        <>
          {Object.keys(state[key][0]).map((key2) => temp = {...temp, [key2]:"NR"})}
          {temp.Name = action.user.name}
          {state[key].push(temp)}
        </>
        ) : (state[action.course] = [{Name: action.user.name}])
      return{
        ...state
      }
    case "EDIT_ATTENDANCE":
      state[action.course][action.index] = action.data;
      return{
        ...state
      }
    case "DELETE_ATTENDANCE":
      Object.keys(state).map(key => state[key] = state[key].filter(el => el.Name !== action.name))
      return{
        ...state,
      }
    case "DELETE_ATTENDANCE_SINGLE":
      state[action.course] = state[action.course].filter(item => item.Name !== action.user);
      return{
        ...state,
      }
    default: return state;
  }
}
export default attendanceReducer