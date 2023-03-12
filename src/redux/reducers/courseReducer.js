const initialState = {
  Calculus: [
    { Name: "Ahmad", role: "teacher" },
    { Name: "Wajid", role: "student" },
  ],

  Algebra: [
    { Name: "Ahmad", role: "teacher" },
    { Name: "Hammad", role: "student" },
    { Name: "Wajid", role: "student" },
  ],

  Python: [],
  "C++": [],
  Java: [],
  JavaScript: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COURSE":
      return {
        ...state,
        [action.course]: [],
      };
    case "ASSIGN_TEACHER":
      Object.keys(state).map(
        (key) =>
          key === action.data.CourseName &&
          state[key].push({ Name: action.data.TeacherName, role: "teacher" })
      );
      return {
        ...state,
      };
    case "REGISTER_COURSE":
      const user = JSON.parse(localStorage.getItem("data"));
      const temp = { Name: user.name, role: user.role };
      Object.keys(state).map((key) =>
        key === action.course ? state[key].push(temp) : null
      );
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default courseReducer;
