/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
class GameObject {
    constructor(gameObjectBits) {
        this.createdAt = gameObjectBits.createdAt;
        this.dimensions = gameObjectBits.dimensions;
    }

    destroy() { return `${this.name} was removed from the game.` };
};

/*
  === CharacterStats ===
  * hp
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

class CharacterStats extends GameObject {
    constructor(characterStatsBits) {
        super(characterStatsBits)
        this.hp = characterStatsBits.hp;
        this.name = characterStatsBits.name;
    }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats {
    constructor(humanoidBits) {
        super(humanoidBits);
        this.faction = humanoidBits.faction;
        this.weapons = humanoidBits.weapons;
        this.language = humanoidBits.language;
    }
    greet() {
        return `${this.name} offeres a greeting in ${this.language}`
    }
    takeDamage() {
        return `${this.name} took damage.`
    }
}

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    hp: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});
const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    hp: 15,
    name: 'Sir Mustachio',
    faction: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});
const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    hp: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});
// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.hp); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.faction); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// // Stretch task:
// // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// // * Create two new objects, one a villain and one a hero and fight it out with methods!

class Hero extends Humanoid {
    constructor(heroThings) {
        super(heroThings)
    }
    hurt(villain) {
        let dmg = Math.floor(Math.random() * 25)
        villain.hp -= dmg;
        return `${this.name} does ${dmg} damage!!`;
    }
};

class Villain extends Humanoid {
    constructor(villainStuff) {
        super(villainStuff);
    }
    bash(hero) {
        let dmg = Math.floor(Math.random() * 25);
        hero.hp -= dmg;
        return `${this.name} did ${dmg} damage!`
    }
};


myHero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 2
    },
    hp: 100,
    name: 'Exzarkay',
    team: 'The good side',
    weapons: [
        'big-shield',
        'sword'
    ],
    language: 'English'
});

badGuy = new Villain({
    name: 'Riley',
    createdAt: new Date(),
    weapons: ['Magic', 'Staff of Fate'],
    language: 'English/Tongan',
    dimensions: {
        length: 1,
        height: 5,
        width: 10
    },
    team: 'The Bad Side',
    hp: 100
});

while (myHero.hp > 0 && badGuy.hp > 0) {
    console.log(myHero.hurt(badGuy));
    console.log(myHero.hp)
    console.log(badGuy.bash(myHero));
}

if (myHero.hp <= 0) {
    console.log('You died! ' + myHero.destroy());
} else if (badGuy.hp <= 0) {
    console.log(`${myHero.name} is triumpant! ` + badGuy.destroy());
}
