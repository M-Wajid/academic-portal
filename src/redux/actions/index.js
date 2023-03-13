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

export const attendanceAdded = (course, keyValue,status) => {
  return {
    type: "ADD_ATTENDANCE",
    course,
    keyValue,
    status
  }
}

export const marksAdded = (course, taskType, data) => {
  return {
    type: "ADD_MARKS",
    course, 
    taskType, 
    data
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

export const leaveAdded = () => {
  return{
    type: "ADD_LEAVE",
  }
}

export const teacherApproved = () => {
  return{
    type: "TEACHER_APPROVAL",
  }
}

export const adminApproved = () => {
  return{
    type: "ADMIN_APPROVAL",
  }
}