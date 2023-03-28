const initialState = {
  Algebra: [
    {Name: "Wajid" , "2023-03-01": "P", "2023-03-02": "A", "2023-03-03": "P", "2023-03-04": "P"},
    {Name: "Hammad" , "2023-03-01": "P", "2023-03-02": "P", "2023-03-03": "P", "2023-03-04": "P"}
  ],
  Calculus: [
    {Name: "Wajid" , "2023-03-01": "A", "2023-03-02": "A", "2023-03-03": "P", "2023-03-04": "P"}
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