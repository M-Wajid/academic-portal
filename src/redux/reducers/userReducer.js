const initialState =  {
  users: [
    {name: "Admin", email: "admin@admin.com", role: "admin", password: "admin123"},
    {name: "Ahmad", email: "ahmad@gmail.com", role: "teacher", password: "ahmad123"},
    {name: "Wajid", email: "wajid@gmail.com", role: "student", password: "wajid123"}
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