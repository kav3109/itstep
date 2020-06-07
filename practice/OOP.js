class Animal {
    constructor(name) {
        this.name = name;// setter
        // this.name();// getter
    }

    get name() {
        return this._privateName;
    }
    set name(val) {
        this._privateName = val;
    }

    static tail() {
        console.log('I have a tail!');
    }
    static createAnimal(name) {//the same - new Animal('Bear')
        return (new this(name));//this === Animal
    }



    // #legs = 4;// private - it understand only Chrome
    // getLegs() {
    //     return this.#legs;
    // }
    // setLegs(val) {
    //     this.#legs = val;
    // }
}
// 1. classic
const bear = new Animal('Bear');
console.log(bear.name);
// 2. static
Animal.tail();
const mouse = Animal.createAnimal('Mouse');
console.log(mouse.name);
// // 3. private
// bear.getLegs();
