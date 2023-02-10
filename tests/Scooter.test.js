const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('does something', () => {
    // edit this to be a real test!
    expect(false).toEqual(false);
  }
)
})

//Method tests
describe('scooter methods', () => {
  // tests here!
  const scooter = new Scooter("London")
  const user = new User("Bob", "Password", 18)

  test('Tests if new instance has correct properties', () => {
    expect(scooter).toHaveProperty("user", null);
    expect(scooter).toHaveProperty("charge");
    expect(scooter).toHaveProperty("serial");
    expect(typeof scooter.isBroken).toBe("boolean");
    expect(scooter.station).toBe("London");
  });

  //rent method
  describe('Tests Scooter class rent method', () => {
    
    test('Tests if error is thrown when the scooters charge is below 20%', () => {
      scooter.charge = 10;
      expect(() => {scooter.rent(user)}).toThrow(new Error("Scooter needs charging!"));
    });

    test('Tests if error is thrown when the scooter is broken', () => {
      scooter.isBroken == true;
        expect(() => {scooter.rent(user)}).toThrow(new Error("Scooter is broken!"));
    });
});

  //dock method
  describe('Tests Scooter class dock method', () => {

    test('Test when scooter is docked station is set to station', () => {
      scooter.dock('station');
        expect(scooter.station).toBe('station');
    })

    test('Test when scooter is docked user is set to null', () => {
      scooter.dock('station');
        expect(scooter.user).toBe(null);
    });
});

  //requestRepair method
  describe('Tests Scooter class requestRepair method', () => {
    it('Tests if isBroken is set to false after the repair', async () => {
        const consoleSpy = jest.spyOn(console, 'log');
        await scooter.requestRepair();
        expect(scooter.isBroken).toBe(false)
    }, 10000)
});

  //charge method
  describe('Tests Scooter class recharge method', () => {
    it('Tests if charge is set to 100 once charged', async () => {
        const consoleSpy = jest.spyOn(console, 'log');
        await scooter.recharge();
        expect(scooter.charge).toBe(100)
    });
});
});
