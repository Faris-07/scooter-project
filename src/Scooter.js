class Scooter{
  constructor (station, user, serial, nextSerial, charge, isBroken) {
    this.station = station;
    this.user = user;
    this.serial = serial;
    this.nextSerial = nextSerial;
    this.charge = charge;
    this.isBroken = isBroken;

  }

  rent() {
    if (Scooter.charge < 20 && Scooter.isBroken == False) {
      return "scooter needs to charge";
    } else if (Scooter.charge < 20 && Scooter.isBroken == True) {
      return "scooter needs repair";
    };
  };

  dock(station) {
    
  }
};


module.exports = Scooter;
