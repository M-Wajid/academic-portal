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

export const courseAdded = (course) => {
  return {
    type: "ADD_COURSE",
    course
  }
}

export const courseRegistered = (course) => {
  return {
    type: "REGISTER_COURSE",
    course
  }
}

export const teacherAssigned = (data) => {
  return {
    type: "ASSIGN_TEACHER",
    data
  }
}