const initialState = {
  Algebra: {
    Assignment_1: [
      { Student_Name: "Wajid", Obtained_Marks: "90", Total_Marks: "100" },
      { Student_Name: "Hammad", Obtained_Marks: "91", Total_Marks: "100" },
    ],
    Quiz_1: [
      { Student_Name: "Wajid", Obtained_Marks: "80", Total_Marks: "100" },
      { Student_Name: "Hammad", Obtained_Marks: "79", Total_Marks: "100" },
    ],
  },

  Calculus: {
    Assignment_1: [
      { Student_Name: "Wajid", Obtained_Marks: "93", Total_Marks: "100" },
    ],
    Quiz_1: [
      { Student_Name: "Wajid", Obtained_Marks: "89", Total_Marks: "100" },
    ],
  },
};

const marksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MARKS":
      Object.keys(state).map(
        (key) =>
          key === action.course &&
          Object.keys(state[key]).map(
            (key2) =>
              key2 === action.taskType && state[key][key2].push(action.data)
          )
      );
      return {
        ...state,
      };
    case "ADD_TASK":
      let temp = false;
      temp = Object.keys(state).includes(action.course);
      !temp && (state[action.course] = {});
      state[action.course][action.taskType] = [];
      return{
        ...state,
      }
    case "EDIT_MARKS":
      state[action.course][action.taskType].map((el) => el.Student_Name === action.item.Student_Name && (el.Obtained_Marks = action.data.Obtained_Marks))
      console.log(state);
      return{
        ...state
      }
    case "DELETE_COURSE_MARKS":
      Object.keys(state[action.course]).map(key => state[action.course][key] = state[action.course][key].filter(el => el.Student_Name !== action.user))
      return{
        ...state,
      }
    case "DELETE_USER_MARKS":
      Object.keys(state).map(key => Object.keys(state[key]).map(item => state[key][item]=state[key][item].filter(el => el.Student_Name !== action.name)))  
      return{
        ...state
      }
    default:
      return state;
  }
};

export default marksReducer;
