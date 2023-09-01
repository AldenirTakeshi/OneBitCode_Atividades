class Character {
  constructor(name, lifePoints, AttackPoints, defensePoints) {
    this.name = name;
    this.lifePoints = lifePoints;
    this.AttackPoints = AttackPoints;
    this.defensePoints = defensePoints;
  }

  Attack(personagemAlvo) {
    let danoRecebido = personagemAlvo.defensePoints - this.AttackPoints;
    personagemAlvo.lifePoints -= danoRecebido;
  }
}

module.exports = Character;
