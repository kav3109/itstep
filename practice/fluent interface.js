class Kitten {
    constructor() {
        this.name = 'Garfield';
        this.color = 'brown';
        this.gender = 'male';
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setColor(color) {
        this.color = color;
        return this;
    }

    setGender(gender) {
        this.gender = gender;
        return this;
    }

    save() {
        console.log(
            `saving ${this.name}, the ${this.color} ${this.gender} kitten`
        );

        // save to database

        return this;
    }
}


// use it
new Kitten()
    .setName('Bob')
    .setColor('black')
    .setGender('male')
    .save();
    // .setName()
    // .setColor()
    // .setGender()
    // .save();