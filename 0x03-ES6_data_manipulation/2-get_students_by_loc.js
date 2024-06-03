export default function getStudentsByLocation(studentList, studentLocation) {
  if (!(Array.isArray(studentList))) {
    return [];
  }
  return studentList.filter((common) => common.location === studentLocation);
}
