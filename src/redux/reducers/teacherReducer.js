const initialState =  {
  teachers: [
    {name: "abc", email: "abc@gmail.com", password: "abc123"},
    {name: "def", email: "def@gmail.com", password: "def123"}
  ]
}

const teacherReducer = (state = initialState, actions) => {
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

export default teacherReducer