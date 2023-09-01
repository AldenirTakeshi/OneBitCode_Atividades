const Character = require("./Character");

class Warrior extends Character {
  constructor(name, lifePoints, AttackPoints, defensePoints, shieldPoints) {
    super(name, lifePoints, AttackPoints, defensePoints);
    this.position = "ataque"; // Ataque || Defesa !
    this.shieldPoints = shieldPoints;
  }

  Attack(personagemAlvo) {
    if (this.position === "ataque") {
      let danoRecebido = personagemAlvo.defensePoints - this.AttackPoints;
      personagemAlvo.lifePoints -= danoRecebido;
    } else {
      console.log(`${this.name} não pode atacar estando em posição de defesa!`);
    }
  }

  alternarModo() {
    if (this.position === "ataque") {
      this.position = "defesa";
      console.log(`${this.name} está agora na posição ${this.position}.`);
      this.lifePoints += this.defensePoints;
    } else {
      this.position = "ataque";
      this.lifePoints -= this.defensePoints;
    }
  }
}

module.exports = Warrior;
