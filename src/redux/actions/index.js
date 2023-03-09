export const userAdded = (singleUser) => {
  return {
    type: "ADD_USER",
    singleUser,
  }
}

export const userDeleted = (name) => {
  return {
    type: "DELETE_USER",
    name,
  }
}

export const attendanceAdded = () => {
  return {
    type: "ADD_ATTENDANCE"
  }
}

export const marksAdded = () => {
  return {
    type: "ADD_MARKS"
  }
}

export const courseAdded = () => {
  return {
    type: "ADD_COURSE"
  }
}

export const courseRegistered = (course) => {
  return {
    type: "REGISTER_COURSE",
    course
  }
}

export const teacherAssigned = () => {
  return {
    type: "ASSIGN_TEACHER"
  }
}