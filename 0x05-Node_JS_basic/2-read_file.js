const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const students = data.split('\n').filter((line) => line.trim() !== '').slice(1);
    process.stdout.write(`Number of students: ${students.length}\n`);

    const fields = {};
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });
    for (const [field, students] of Object.entries(fields)) {
      process.stdout.write(`Number of students in ${field}: ${students.length} . List: ${students}\n`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
