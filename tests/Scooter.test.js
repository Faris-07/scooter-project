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
  const scooter = new Scooter()
  //rent method
  test('Test if scooter less than 20% charged and not broken', () => {
    expect(scooter.charge < 20 && scooter.isBroken == False).toEqual('scooter needs to charge')
  })

  test('Test if scooter less than 20% charged and is broken', () => {
    expect(scooter.charge < 20 && scooter.isBroken == True).toEqual('scooter needs repair')
  })


  //dock method

  //requestRepair method

  //charge method

})
