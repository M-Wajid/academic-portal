const initialState = {
  examDates:[
    {courseName: "Calculus", date1: "25-04-2023", date2: "26-04-2023"}
  ],
  bookedDate: [
    {studentName: "Wajid", bookedExam:[{courseName: "Calculus", date: "25-04-2023"}]}
  ]
}

const bookExamReducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_EXAM_DATE":
      return{
        ...state,
      }
    case "EDIT_EXAM_DATE":
      return{
        ...state,
      }
    case "BOOK_EXAM":
      return{
        ...state,
      }
    default: return state;
  }
}

export default bookExamReducer