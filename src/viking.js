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
    //creating random viking warrior and saxon warrior
    let indexVikingRandomAtak = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    let indexSaxonRandomDef = Math.floor(Math.random() * this.saxonArmy.length);
    //chosen the warriors
    let chosenViking = this.vikingArmy[indexVikingRandomAtak];
    let chosenSaxon = this.saxonArmy[indexSaxonRandomDef];
    //setting the chosenSaxon damage
    let saxonDamageReceived = chosenSaxon.receiveDamage(chosenViking.attack());
    //if dead, removing the chosenSaxon from the saxonArmy
    if (chosenSaxon.health <= 0) {
      //let killed = this.vikingArmy.indexOf(chosenSaxon);
      //this.vikingArmy.splice(killed, 1);
      this.saxonArmy.splice(chosenSaxon, 1);
    }
    //returning the damage received from the chosenSaxon at the battlefield
    return saxonDamageReceived;
  }
  saxonAttack() {
    //creating random viking warrior and saxon warrior
    let indexVikingRandomDef = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    let indexSaxonRandomAtak = Math.floor(
      Math.random() * this.saxonArmy.length
    );

    //chosen the warriors
    let chosenViking = this.vikingArmy[indexVikingRandomDef];
    let chosenSaxon = this.saxonArmy[indexSaxonRandomAtak];

    //setting the chosenSaxon damage
    let vikingDamageReceived = chosenViking.receiveDamage(chosenSaxon.attack());

    //if dead, removing the chosenSaxon from the saxonArmy
    if (chosenViking.health <= 0) {
      this.vikingArmy.splice(chosenViking, 1);
    }

    //returning the damage received from the chosenSaxon at the battlefield
    return vikingDamageReceived;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    }
    if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}
