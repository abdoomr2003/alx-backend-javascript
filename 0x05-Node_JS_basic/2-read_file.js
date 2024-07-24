const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = { count: 0, field: [] };
      }
      fields[field].count += 1;
      fields[field].field.push(firstname);
    });

    Object.entries(fields).forEach(([field, data]) => {
      console.log(`Number of students in ${field}: ${data.count}. List: ${fields[field].field.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
