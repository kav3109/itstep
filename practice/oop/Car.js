'use strict';

export default class Car {
    constructor(brand) {
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }

    present() {
        return "I have a " + this.carname;
    }
}