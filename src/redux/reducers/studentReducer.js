const initialState = {
  students: [
    {name: "xyz", email:"xyz@gmail.com", password: "xyz123"},
    {name: "123", email:"123@gmail.com", password: "123123"}
  ]
}

const studentReducer = (state={initialState},action) => {
  switch(action.type){
    case "ADD_STUDENT":
      return{
        ...state,
      }
    case "DELETE_STUDENT":
      return{
        ...state,
      }
    default: return state
  }
}

export default studentReducer;