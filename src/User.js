class User {
  constructor(username, password, age) {
    this.username = username; 
    this.password = password; 
    this.age = age; 
    this.loggedIn = false; 
  }

  // missing login and logout methods - 
  // the methods in the ScooterApp class would be 
  // calling the login and logout methods from this class
}

module.exports = User
