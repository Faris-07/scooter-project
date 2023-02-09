const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('does something', () => {
    // edit this to be a real test!
    expect(false).toEqual(true);
  }
)
})

//Method tests
describe('scooter methods', () => {
  // tests here!
  const Scooter = new Scooter('Sir', 25)
  //rent method
  test('Test if scooter less than 20% charged and not broken', () => {
    expect(Scooter.charge < 20 && isBroken == False).toBe('scooter needs to charge')
  })

  test('Test if scooter less than 20% charged and is broken', () => {
    expect(Scooter.charge < 20 && isBroken == True).toBe('scooter needs repair')
  })


  //dock method

  //requestRepair method

  //charge method

})
