export default function getStudentIdsSum(studentsList) {
  if (!(Array.isArray(studentsList))) {
    return [];
  }

  return studentsList.reduce((sum, idx) => sum + idx.id, 0);
}
