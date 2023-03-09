const initialState = {
  Calculus: [
    {Name: "Ahmad", role: 'teacher'},
    {Name: "Wajid", role: 'student'}
  ],

  Algebra: [
    {Name: "abc", role: 'teacher'},
    {Name: "Hammad", role: 'student'},
    {Name: "Wajid", role: 'student'}
  ],

  Python: [],
  "C++": [],
  Java: [],
  JavaScript: [] 
}

const courseReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_COURSE":
      return{
        ...state
      }
    case "ASSIGN_TEACHER":
      return{
        ...state
      }
    case "REGISTER_COURSE":
      const user = JSON.parse(localStorage.getItem('data'));
      const temp = {Name: user.name, role: user.role};
      Object.keys(state).map((key) => key === action.course ? state[key].push(temp) :null);
      return {
        ...state,
      };
    default: return state;
  }
}

export default courseReducer