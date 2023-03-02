const initialState = {
  students: [
    {name: "xyz", email:"xyz@gmail.com"},
    {name: "123", email:"123@gmail.com"}
  ]
}

const studentReducer = (state={initialState},action) => {
  switch(action.type){
    case "GET_DATA":
      return{
        ...state,
      }
    default: return state
  }
}

export default studentReducer;