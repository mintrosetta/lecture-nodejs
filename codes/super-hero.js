class SuperHero {
    constructor(name) {
        this.name = name;
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }
}

module.exports = new SuperHero("Batman");