const initialState =  {
  teachers: [
    {name: "abc", email: "abc@gmail.com", role: "teacher", password: "abc123"},
    {name: "def", email: "def@gmail.com", role: "student", password: "def123"}
  ]
}

const userReducer = (state = initialState, actions) => {
  switch(actions.type){
    case "ADD_TEACHER":
      return{
        ...state
      }
    case "DELETE_TEACHER":
      return{
        ...state
      }
    default: return state;
  }
}

export default userReducer