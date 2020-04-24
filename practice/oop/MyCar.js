import Car from "./Car.js";

class MyCar extends Car {
    constructor(brand, mod) {
        super(brand);
        this._model = mod;
    }

    get carmod() {
        return this._model;
    }
    set carmod(x) {
        this._model = x;
    }

    show() {
        return this.present() + ', it is a ' + this._model;
    }
}
const mycar = new MyCar("Ford", "Mustang");
mycar.carname = 'Mini';
mycar.carmod = 'Cooper';
console.log(mycar.show());