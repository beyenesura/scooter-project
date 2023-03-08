const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    // from project description:
    // this.stations is an object whose keys are the names of station locations, and whose values are arrays of Scooters. 
    // You can hard-code these stations in the constructor.
    // There should be at least three. Initially, there are no scooters at any stations.
    this.stations = []; 
    this.registeredUsers = {}; 
    // saving the current user is a cool idea for a further extension! 
    this.currentUser = null; 
  }

  // make sure your method arguments match the project description:
  // registerUser takes in a username, password, and age
  registerUser(user) {
    // we need an additional check in case the user is too young to register
    if (user.username in this.registeredUsers) {
      throw new Error('Username already taken');
    }

    // because this method would be taking in a username (rather than a user),
    // we need to create a new User object with the username, password, and age specified,
    // e.g. let user = new User(username, password, age)
    // then, the line below would no longer need `user.` before `username`
    this.registeredUsers[user.username] = user;
  }

  loginUser(username, password) {
    const user = this.registeredUsers[username];
    // this method would be using the User class's login method in a try catch,
    // throwing any errors that result. 
    // the first half of this conditional is good to check in this method,
    // and then checking the password against the user's password would be in the 
    // User class's login method
    if (!user || user.password !== password) {
      throw new Error('Invalid username or password');
    }
    this.currentUser = user;
  }

  // logoutUser takes in a username as an argument
  logoutUser() {
    // let's include some error handling here as well,
    // in case the user doesn't exist or isn't logged in

    // then, we'd use the User class's logout method to logout
    this.currentUser = null;
  }

  // missing createScooter, dockScooter, rentScooter, printState methods
}


module.exports = ScooterApp
