class User {
  constructor (username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
  }

  login(password) {
    if (password == True) {
      loggedIn = True;
    } else () => {
      throw new Error("incorrect password")
    };
  };

  logout() {
    loggedIn = False;
  }
};

module.exports = User
