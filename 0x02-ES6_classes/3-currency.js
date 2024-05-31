export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be a string');
    }
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(NewCode) {
    if (typeof NewCode === 'string') {
      this._code = NewCode;
    }
    throw new TypeError('code must be a string');
  }

  set name(NewName) {
    if (typeof NewName === 'string') {
      this._name = NewName;
    }
    throw new TypeError('name must be a string');
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
