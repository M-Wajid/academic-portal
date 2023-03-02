const initialState =  {
  teachers: [
    {name: "abc", email: "abc@gmail.com"},
    {name: "def", email: "def@gmail.com"}
  ]
}

const teacherReducer = (state = initialState, actions) => {
  switch(actions.type){
    case "ADD_STUDENT":
      return{
        ...state
      }
    default: return state;
  }
}

export default teacherReducer