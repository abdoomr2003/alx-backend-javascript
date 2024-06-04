export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!(Array.isArray(getListStudents)) || typeof city !== 'string' || typeof newGrades !== 'object') { return []; }
  const final = getListStudents.filter((obj) => obj.location === city).map((studentObj) => {
    const studentGrade = newGrades.find((grade) => studentObj.id === grade.studentId);
    if (!studentGrade) {
      return {
        ...studentObj,
        grade: 'N/A',
      };
    }
    return {
      ...studentObj,
      grade: studentGrade.grade,
    };
  });
  return final;
}
