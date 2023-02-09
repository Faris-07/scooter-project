const User = require('../src/User')

// User tests here

// test username
describe('test username', () => {
    // tests here!
    const user = new User("Bob", "Password", 18)
    
    test('Checks if user can login with correct password', () => {
      expect(user.password == True).toEqual(user.loggedIn = True)
    })
});
// test password

// test age

// test login

// test logout
