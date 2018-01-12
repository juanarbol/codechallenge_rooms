const expect = require('chai').expect
const countLowerOrEqual = require('./../countLowerOrEqual')

describe('countLowerOrEqual function ', () => {
  const maxes = [1, 3, 6, 9, 35]
  const numbers = [6, 7, 8, 9, 3, 4, 6, 1, 1, 1, 2, 3, 10, 37, 3]
  const expected = [3, 7, 10, 13, 14]

  it('Should works with sample data', () => {
    expect(countLowerOrEqual(maxes, numbers)).to.deep.equal(expected)
  })

  it('Should works with non ordered data', () => {
    expect(countLowerOrEqual(maxes, numbers.reverse())).to.deep.equal(expected)
    expect(countLowerOrEqual(maxes.reverse(), numbers)).to.deep.equal(expected.reverse())
    expect(countLowerOrEqual(maxes.reverse(), numbers.reverse())).to.deep.equal(expected.reverse())
  })
})
