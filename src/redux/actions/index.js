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

export const attendanceEdited = (course, index, data) => {
  return{
    type: "EDIT_ATTENDANCE",
    course,
    index,
    data
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

export const marksEdited = (course, taskType, item, data) => {
  return {
    type: "EDIT_MARKS",
    course, 
    taskType,
    item, 
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

export const courseUnregistered = (course,user) => {
  return{
    type: "UNREGISTER_COURSE",
    course,
    user
  }
}

export const teacherAssigned = (data) => {
  return {
    type: "ASSIGN_TEACHER",
    data
  }
}

export const leaveAdded = (newLeave,course,classArray) => {
  return{
    type: "ADD_LEAVE",
    newLeave,
    course,
    classArray
  }
}

export const leaveDeleted = (course, id) => {
  return{
    type: "DELETE_LEAVE",
    course,
    id
  }
}

export const leaveEdited = (course, id, editLeave) => {
  return{
    type: "EDIT_LEAVE",
    course,
    id,
    editLeave
  }
}

export const teacherApproved = (status, key, id) => {
  return{
    type: "TEACHER_APPROVAL",
    status,
    key,
    id
  }
}

export const adminApproved = (status, key, id) => {
  return{
    type: "ADMIN_APPROVAL",
    status,
    key,
    id
  }
}

export const studentAdded = (course,user) => {
  return{
    type: "ADD_STUDENT",
    course,
    user
  }
}

export const taskAdded = (course,taskType) => {
  return{
    type: "ADD_TASK",
    course,
    taskType
  }
}

export const examDateAdded = (data) => {
  return{
    type: "ADD_EXAM_DATE",
    data
  }
}

export const examDateEdited = (data,index) => {
  return{
    type: "EDIT_EXAM_DATE",
    data,
    index
  }
}

export const examBooked = (name,course,date) => {
  return{
    type: "BOOK_EXAM",
    name,
    course,
    date
  }
}

export const bookedExamDeleted = (id) => {
  return{
    type: "DELETE_BOOKED_EXAM",
    id
  }
}

export const userUnregistered = (name) => {
  return{
    type: "UNREGISTER_USER",
    name
  }
}

export const userUnassigned = (course,user) => {
  return{
    type: "UNASSIGN_USER",
    course,
    user
  }
}

export const attendanceDeleted = (name) => {
  return{
    type: "DELETE_ATTENDANCE",
    name
  }
}

export const attendanceDeletedSingle = (course,user) => {
  return{
    type: "DELETE_ATTENDANCE_SINGLE",
    course,
    user
  }
}