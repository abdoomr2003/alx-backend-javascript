import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(range) {
    if (typeof range !== 'number') {
      throw TypeError('Range must be a number');
    }
    this._range = range;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species](this._brand, this._motor, this._color, this._range);
  }
}
