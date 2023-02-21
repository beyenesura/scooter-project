const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = []; 
    this.registeredUsers = {}; 
    this.currentUser = null; 
  }

  registerUser(user) {
    if (user.username in this.registeredUsers) {
      throw new Error('Username already taken');
    }
    this.registeredUsers[user.username] = user;
  }

  loginUser(username, password) {
    const user = this.registeredUsers[username];
    if (!user || user.password !== password) {
      throw new Error('Invalid username or password');
    }
    this.currentUser = user;
  }

  logoutUser() {
    this.currentUser = null;
  }
}


module.exports = ScooterApp
