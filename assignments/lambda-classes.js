// CODE here for your Medevil Classes
class Person {
    constructor(personThings) {
        this.name = personThings.name;
        this.gender = personThings.gender;
    }
    greet() {
        return `Hello, my name is, ${this.name}`
    }
};

class King extends Person {
    constructor(kingThings) {
        super(kingThings);
        this.realm = kingThings.realm;
        this.size = kingThings.size;
    }
    taunt() {
        return `I am the King of ${this.realm}! I demand your fidelity!`
    };
};

class Knight extends Person {
    constructor(kightlyThings) {
        super(kightlyThings);
        this.class = kightlyThings.class;;
        this.serviceAge = kightlyThings.serviceAge;
    }
    declare() {
        return `I've served the realm for ${this.serviceAge} years.`
    };
};

class Squire extends Knight {
    constructor(squireThings) {
        super(squireThings);
        this.duties = squireThings.duties;
        this.master = squireThings.master;
    }
    sayThing(master) {
        return `${master.name} is my Knightly master.`
    };
};

const firstKnight = new Knight({
    name: 'Sir Pontis',
    serviceAge: 34,
    gender: 'Male',
    class: 'Heavy'
});

const ned = new Squire({
    name: 'Ned',
    gender: 'Male',
    master: firstKnight
});

console.log(ned.sayThing(ned.master));