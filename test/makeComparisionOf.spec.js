const expect = require('chai').expect
const makeComparisionOf = require('./../makeComparisionOf')

describe('makeComparisionOf function', () => {
  const numbers = [6, 7, 8, 9, 3, 4, 6, 1, 1, 1, 2, 3, 10, 37, 3]
  it('Should return 0 when no assertion', () => {
    expect(makeComparisionOf(numbers, 0)).to.be.equal(0)
  })

  it('Should return 3 when three assertion', () => {
    expect(makeComparisionOf(numbers, 1)).to.be.equal(3)
  })

  it('Should return numeber\'s length when is compared to maximum value', () => {
    expect(makeComparisionOf(numbers, Math.max(...numbers))).to.be.equal(numbers.length)
  })

  it('Should return numeber\'s length when is compared to maximum + 1 value', () => {
    expect(makeComparisionOf(numbers, Math.max(...numbers) + 1)).to.be.equal(numbers.length)
  })

  it('Should return numeber\'s length when is compared to maximum + k value', () => {
    expect(makeComparisionOf(numbers, Math.max(...numbers) + Math.floor((Math.random() * 100) + 1))).to.be.equal(numbers.length)
  })
})
