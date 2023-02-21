class Scooter{
 class Scooter {
  static nextSerial = 1;
  
  constructor(station, user, charge, isBroken) {
    this.station = station;
    this.user = user;
    this.serial = Scooter.nextSerial++;
    this.charge = charge;
    this.isBroken = isBroken;
  }
  
  rent(user) {
    if (this.user) {
      throw new Error("Scooter is already rented");
    }
    
    if (this.charge < 10) {
      throw new Error("Scooter is low on charge");
    }
    
    if (this.isBroken) {
      throw new Error("Scooter is broken");
    }
    
    this.user = user;
    console.log(`Scooter ${this.serial} rented by ${user}`);
  }
  
  dock(station) {
    if (!this.user) {
      throw new Error("Scooter is not currently rented");
    }
    
    if (this.isBroken) {
      console.log(`Scooter ${this.serial} is broken and cannot be docked`);
      return;
    }
    
    this.station = station;
    this.user = null;
    console.log(`Scooter ${this.serial} docked at ${station}`);
  }
}
}

module.exports = Scooter
