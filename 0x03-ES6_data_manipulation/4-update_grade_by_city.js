export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  if (!(Array.isArray(getListStudents))) { return []; }
  if (typeof city !== 'string') { return []; }
  if (typeof newGrades !== 'object') { return []; }
  const final = getListStudents.filter((obj) => obj.location === city).map((obj) => {
    const studentGrade = newGrades.find((grade) => getListStudents.id === grade.id);
    if (studentGrade === false) {
      return {
        ...obj,
        grade: 'N/A',
      };
    }
    return {
      ...obj,
      grade: studentGrade.grade,
    };
  });
  return final;
}
