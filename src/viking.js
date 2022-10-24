// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  //re-implemented the method receiveDamage() for Vikings
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  //re-implemented the method receiveDamage() for Saxons
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let indexVikingRandom = Math.floor(Math.random() * this.vikingArmy.length);
    let indexSaxonRandom = Math.floor(Math.random() * this.saxonArmy.length);

    let chosenViking = this.vikingArmy[indexVikingRandom];
    let chosenSaxon = this.saxonArmy[indexSaxonRandom];

    let saxonDamage = chosenSaxon.receiveDamage(chosenViking.attack());
    if (saxonDamage > chosenSaxon.health) {
      let killed = this.vikingArmy.indexOf(chosenSaxon);
      this.vikingArmy.splice(killed, 1);
    }
  }
  saxonAttack() {}
  showStatus() {}
}
