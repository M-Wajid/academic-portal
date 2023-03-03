const initialState =  {
  teachers: [
    {name: "Admin", email: "admin@admin.com", role: "admin", password: "admin123"},
    {name: "abc", email: "abc@gmail.com", role: "teacher", password: "abc123"},
    {name: "def", email: "def@gmail.com", role: "student", password: "def123"}
  ]
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_USER":
      return{
        ...state
      }
    case "DELETE_USER":
      return{
        ...state
      }
    default: return state;
  }
}

export default userReducer