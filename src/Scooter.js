class Scooter{
  static nextSerial = 1;
  
  // in this constructor, we really only need the station
  // since user, charge, and isBroken have default values to start
  constructor(station, user, charge, isBroken) {
    this.station = station;
    // when a scooter is created, there is no user tied to it yet
    // hence, this.user should be null initially
    this.user = user;
    this.serial = Scooter.nextSerial++;
    // this.charge starts at 100 on initialization
    this.charge = charge;
    // this.isBroken starts at falsae
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
    // make sure to include assigning the station to null,
    // as the scooter is no longer tied to a station upon rental
    console.log(`Scooter ${this.serial} rented by ${user}`);
  }
  
  dock(station) {
    // nice error handling here
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

  // missing recharge and requestRepair methods
}

module.exports = Scooter
