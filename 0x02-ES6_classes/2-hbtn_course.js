export default class HolbertonCourse {
  constructor(name, length, students) {
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
    if (Array.isArray(NewStudents) && NewStudents.length > 0) {
      this._students = NewStudents;
    } else {
      throw new TypeError('Students must be a non-empty array');
    }
  }
}
