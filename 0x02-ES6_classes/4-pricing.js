import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be instance of Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'string') {
      throw new TypeError('amount must be string');
    } else {
      this._amount = newAmount;
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurreny) {
    if (!(newCurreny instanceof Currency)) {
      throw new TypeError('currency must be instance of Currency');
    } else {
      this._currency = newCurreny;
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
