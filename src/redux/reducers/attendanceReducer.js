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
    default: return state;
  }
}
export default attendanceReducer