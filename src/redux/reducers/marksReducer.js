const initialState = {
  Algebra: {
    Assignment_1: [
      {Student_Name: "Wajid", Obtained_Marks: "90", Total_Marks: "100"},
      {Student_Name: "Hammad", Obtained_Marks: "91", Total_Marks: "100"}
    ],
    Quiz_1: [
      {Student_Name: "Wajid", Obtained_Marks: "80", Total_Marks: "100"},
      {Student_Name: "Hammad", Obtained_Marks: "79", Total_Marks: "100"}
    ]
  },

  Calculus: {
    Assignment_1: [
      {Student_Name: "Wajid", Obtained_Marks: "93", Total_Marks: "100"}
    ],
    Quiz_1: [
      {Student_Name: "Wajid", Obtained_Marks: "89", Total_Marks: "100"}
    ]
  }
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