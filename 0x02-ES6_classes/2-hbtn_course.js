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

  set students(value) {
    if (!Array.isArray(value)) {
      throw TypeError('students must be an Array');
    }
    if (value.some((student) => typeof student !== 'string')) {
      throw TypeError('students must be an Array of Strings');
    }
    this._students = value;
  }
}
