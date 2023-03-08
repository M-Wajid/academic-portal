const initialState = {
  marks: [
    {Student_Name: "ABC", Course_Name: "ABCD", Total_Marks: "100", Obtained_Marks: "100"}
  ]
}

const marksReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_MARKS":
      return{
        ...state
      }
    default: return state;
  }
}

export default marksReducer;