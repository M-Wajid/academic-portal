const initialState =  {
  users: [
    {name: "Admin", email: "admin@admin.com", role: "admin", password: "admin123"},
    {name: "Ahmad", email: "ahmad@gmail.com", role: "teacher", password: "ahmad123"},
    {name: "Wajid", email: "wajid@gmail.com", role: "student", password: "wajid123"},
    {name: "Hammad", email: "hammad@gmail.com", role: "student", password: "hammad123"}
  ]
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_USER":
      let arr = [...state.users];
      arr.push(action.singleUser)
      return{
        ...state,
        users: arr,
      }
    case "DELETE_USER":
      return{
        ...state,
        users: state.users.filter((item)=> item.name !== action.name)
      }
    case "EDIT_USER":
      let array = [];
      state.users.map(item => item.email === action.item.email ? array.push(action.item) : array.push(item));
      console.log(array);
      return{
        ...state,
        users: array,
      }
    default: return state;
  }
}

export default userReducer