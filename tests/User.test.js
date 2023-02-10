const User = require('../src/User')

// User tests here

// test username
describe('User Class Tests', () => {
    // tests here!
  const user = new User("Bob", "Password", 18)

// test new user
  test('Tests new instance of User', () => {
    expect(user).toBeInstanceOf(User);
  });

// test Username
  test('Tests users username', () => {
    expect(user.username).toBe('Bob');
  });

// test password
  test('Tests if users password is correct', () => {
    expect(user.password).toBe('Password');
  });

// test age
  test('Tests if users age is correct', () => {
    expect(user.age).toBe(18);
  });

// Test loggedIn Status
  test('Tests if user starts with loggedIn as false', () => {
    expect(user.loggedIn).toBe(false);
  });

// test login

// test logout
});