const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {
      "Liverpool Street": [],
      "Bank": [],
      "Shoreditch": []
    }
    this.registeredUsers = {}
  }
  
  // registerUser Method
  registerUser(username, password, age){
    if(this.registeredUsers[username]){
      throw new Error("already Registered");
    } else if(age < 18){
      throw new Error("too young to register");
    } else {
      this.registeredUsers[username] = new User(username, password, age);
    }
  }

  // loginUser Method
  loginUser(username, password) {
    if (!this.registeredUsers[username] || this.registeredUsers[username].password !== password) {
      throw new Error("Username or password is incorrect");
    } else {
      console.log("User has been logged in");
      return this.registeredUsers[username].login(password);
    }
  }

  // logoutUser Method
  logoutUser(username) {
    if ((!(this.registeredUsers.hasOwnProperty(username))) || (this.registeredUsers[username].loggedIn === false)) {
      throw new Error("No such user is logged in");
    }
    console.log("User has been logged out");
    return this.registeredUsers[username].logout();
  }

  // createScooter Method
    createScooter(station) {
      if (!this.stations[station]) {
        throw new Error("No such station");
      }
      const scooter = new Scooter();
      this.stations[station].push(scooter);
      scooter.station = station;
      console.log("Created new scooter");
      return scooter;
    }
  
  // rentScooter Method
  rentScooter(scooter, user) {
    let station = scooter.station;
    for (let key in this.stations) {
        if (station === key) {
          let scooters = Object.values(this.stations[key]);
          if(!scooters.includes(scooter)){
            scooter.station = null;
            throw new Error("Scooter already rented");
          } else {
            scooter.user = user;
            scooter.station = null;
            console.log("Scooter is rented");
            break;
          };
        };
      };
    };

  // dockScooter Method
  dockScooter(scooter, station) {
    let stationFound = false;
    for (let key in this.stations) {
        if (station === key) {
          let scooters = Object.values(this.stations[key]);
          if(scooters.includes(scooter)){
            throw new Error("scooter already at station");
          } else {

            this.stations[station].push(scooter);
            console.log("scooter is docked");
            stationFound = true;
            break;
          }
        }
    }

    if (!stationFound) {
        throw new Error("No such station");
    }
}

  print(){
    console.log(this.registeredUsers);
    console.log(this.stations);
  }

}

module.exports = ScooterApp
