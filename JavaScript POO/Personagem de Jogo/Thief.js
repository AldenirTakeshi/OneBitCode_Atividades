const Character = require("./Character");

class Thief extends Character {
  constructor(name, lifePoints, AttackPoints, defensePoints) {
    super(name, lifePoints, AttackPoints, defensePoints);
  }

  Attack(personagemAlvo) {
    let danoRecebido = (personagemAlvo.defensePoints - this.Attack) * 2;
    personagemAlvo.lifePoints -= danoRecebido;
  }
}

module.exports = Thief;
