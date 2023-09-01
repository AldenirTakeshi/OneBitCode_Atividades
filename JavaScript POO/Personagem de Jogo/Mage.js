const Character = require("./Character");

class Mage extends Character {
  constructor(name, lifePoints, AttackPoints, defensePoints, magicPoints) {
    super(name, lifePoints, AttackPoints, defensePoints);
    this.magicPoints = magicPoints;
  }

  Attack(personagemAlvo) {
    let danoRecebido = personagemAlvo.defensePoints - (this.Attack + this.magicPoints);
    personagemAlvo.lifePoints -= danoRecebido;
  }

  heal(personagemAlvo) {
    personagemAlvo.lifePoints += this.magicPoints * 2;
  }
}

module.exports = Mage;
