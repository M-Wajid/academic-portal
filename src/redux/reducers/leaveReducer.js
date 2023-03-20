const initialState = {
  Calculus: [
    {
      id: 1,
      StudentName: "Wajid",
      TeacherName: "Ahmad",
      LeaveFrom: "27-03-2023",
      LeaveTo: "29-03-2023",
      TeacherApproval: " - ",
      AdminApproval: " - ",
    },
    {
      id: 2,
      StudentName: "Wajid",
      TeacherName: "Ahmad",
      LeaveFrom: "31-03-2023",
      LeaveTo: "31-03-2023",
      TeacherApproval: " - ",
      AdminApproval: " - ",
    },
  ],
  Algebra: [
    {
      id: 3,
      StudentName: "Wajid",
      TeacherName: "Ahmad",
      LeaveFrom: "27-03-2023",
      LeaveTo: "29-03-2023",
      TeacherApproval: " - ",
      AdminApproval: " - ",
    },
    {
      id: 4,
      StudentName: "Wajid",
      TeacherName: "Ahmad",
      LeaveFrom: "31-03-2023",
      LeaveTo: "31-03-2023",
      TeacherApproval: " - ",
      AdminApproval: " - ",
    },
  ],
};

const leaveReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_LEAVE":
      let arr = action.classArray;
      let teacher = arr.find((el) => el.role === "teacher");
      const user = JSON.parse(localStorage.getItem("data"));
      console.log(state);
      state[action.course] === undefined
        ? (state[action.course] = [
            {
              id: crypto.randomUUID(),
              StudentName: user.name,
              TeacherName: teacher.Name,
              LeaveFrom: action.newLeave.LeaveFrom,
              LeaveTo: action.newLeave.LeaveTo,
              TeacherApproval: " - ",
              AdminApproval: " - ",
            },
          ])
        : state[action.course].push({
            id: crypto.randomUUID(),
            StudentName: user.name,
            TeacherName: teacher.Name,
            LeaveFrom: action.newLeave.LeaveFrom,
            LeaveTo: action.newLeave.LeaveFrom,
            TeacherApproval: " - ",
            AdminApproval: " - ",
          });
          console.log(state);
      return {
        ...state,
      };
    case "DELETE_LEAVE":
      return {
        ...state,
        [action.course]: state[action.course].filter(
          (item) => item.id !== action.id
        ),
      };
    case "EDIT_LEAVE":
      return {
        ...state,
        [action.course]: state[action.course].map((item) =>
          item.id === action.id
            ? {
                ...item,
                LeaveFrom: action.editLeave.LeaveFrom,
                LeaveTo: action.editLeave.LeaveTo,
              }
            : { ...item }
        ),
      };
    case "TEACHER_APPROVAL":
      state[action.key].map(
        (item) =>
          item.id === action.id && (item["TeacherApproval"] = action.status)
      );
      return {
        ...state,
      };
    case "ADMIN_APPROVAL":
      state[action.key].map(
        (item) =>
          item.id === action.id && (item["AdminApproval"] = action.status)
      );
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default leaveReducer;
