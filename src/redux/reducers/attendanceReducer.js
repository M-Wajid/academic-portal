const initialState = {
  attendance: [
    {Name: "Wajid" , "01-03-2023":"P"}
  ]
}

const attendanceReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_ATTENDANCE":
      return {
        ...state,
      }
    default: return state;
  }
}
export default attendanceReducer