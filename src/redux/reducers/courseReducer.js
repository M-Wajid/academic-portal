const initialState = {
  Calculus: [
    {Name: "Ahmad", role: 'teacher'},
    {Name: "Wajid", role: 'student'}
  ],

  Algebra: [
    {Name: "abc", role: 'teacher'},
    {Name: "Hammad", role: 'student'},
    {Name: "Wajid", role: 'student'}
  ]
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
    default: return state;
  }
}

export default courseReducer