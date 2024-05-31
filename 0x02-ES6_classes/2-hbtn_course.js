export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('length must be a number');
    }
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw TypeError('students must be an Array of Strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(NewName) {
    if (typeof NewName === 'string' && NewName.length > 0) {
      this._name = NewName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(NewLength) {
    if (typeof NewLength === 'number') {
      this._length = NewLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(NewStudents) {
    if (Array.isArray(NewStudents) && NewStudents.every((students) => typeof (students) === 'string')) {
      this._students = NewStudents;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
