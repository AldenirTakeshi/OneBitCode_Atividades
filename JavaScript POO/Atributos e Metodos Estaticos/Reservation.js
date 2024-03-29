class Reservation {
  constructor(quests, room, days) {
    this.quests = quests;
    this.room = room;
    this.days = days;
    this.total = days * Reservation.baseFee;
  }

  static baseFee = 150;

  static showBaseFee() {
    console.log(`${Reservation.baseFee}`);
  }
  static get premiumFree() {
    return Reservation.baseFee * 1.5;
  }
}

Reservation.showBaseFee();

const r1 = new Reservation(3, "201", 5);
console.log(r1);

const r2 = new Reservation(2, "104", 2);
console.log(r2);
console.log(`${Reservation.premiumFree}`);
