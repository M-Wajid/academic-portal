const initialState = {
  Calculus: [
    {StudentName: "Wajid", TeacherName: "Ahmad", LeaveFrom: "27-03-2023", LeaveTo: "29-03-2023", TeacherApproval: " - ", AdminApproval: " - " }
  ]
}

const leaveReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_LEAVE":
      return {
        ...state
      }
    case "TEACHER_APPROVAL":
      return {
        ...state
      }
    case "ADMIN_APPROVAL":
      return {
       ...state
      }
    default: return state;
  }
}

export default leaveReducer;