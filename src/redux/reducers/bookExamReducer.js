const initialState = {
  examDates: [
    { courseName: "Calculus", date1: "25-04-2023", date2: "26-04-2023" },
    { courseName: "Algebra", date1: "25-04-2023", date2: "26-04-2023" },
  ],
  bookedDate: [
    {
      studentName: "Wajid",
      bookedExam: [{ courseName: "Calculus", date: "25-04-2023" }],
    },
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
    case "BOOK_EXAM":
      let flag = undefined;
      let flag2 = undefined;
      const user = JSON.parse(localStorage.getItem("data"));
      flag2 = state["bookedDate"].find((el) => el.studentName === user.name);
      flag2 === undefined
        ? state["bookedDate"].push({
            studentName: user.name,
            bookedExam: [{ courseName: action.course, date: action.date }],
          })
        : state["bookedDate"].map(
            (item) =>
              item.studentName === user.name && (
                <>
                  {
                    (flag = item.bookedExam.find(
                      (el) => el.courseName === action.course
                    ))
                  }
                  {flag === undefined
                    ? item.bookedExam.push({
                        courseName: action.course,
                        date: action.date,
                      })
                    : item.bookedExam.map(
                        (el) =>
                          el.courseName === action.course &&
                          (el["date"] = action.date)
                      )}
                </>
              )
          );
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default bookExamReducer;
