const initialState = {
  examDates: [
    { courseName: "Calculus", date1: "2023-05-25", date2: "2023-05-26" },
    { courseName: "Algebra", date1: "2023-05-24", date2: "2023-05-25" },
    { courseName: "Python", date1: "2023-05-27", date2: "2023-05-28" },
  ],
  bookedExam: [
      { id: 1, studentName: "Wajid", courseName: "Calculus", date: "2023-05-26" }
  ],
};

const bookExamReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EXAM_DATE":
      state.examDates.push(action.data);
      return {
        ...state,
      };
    case "EDIT_EXAM_DATE":
      state.examDates[action.index] = action.data;
      return {
        ...state,
      };
    case "DELETE_BOOKED_EXAM":
      state["bookedExam"] = state.bookedExam.filter(item => item.id !== action.id)
      return {
        ...state,
      };
    case "BOOK_EXAM":
      const nameFilter = state.bookedExam.filter(item => item.studentName === action.name);
      let courseFilter = [];
      if (nameFilter.legth !== 0){
        courseFilter = nameFilter.filter(item => item.courseName === action.course);
      }
      if (courseFilter.legth !== 0){
        !courseFilter.find(item => item.date === action.date) ? 
        state.bookedExam.push({
          id: crypto.randomUUID(),
          studentName: action.name,
          courseName: action.course,
          date: action.date
        }) : alert(action.course + " exam is already booked on " + action.date)
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default bookExamReducer;
