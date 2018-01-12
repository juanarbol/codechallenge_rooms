const expect = require('chai').expect
const sortMethod = require('./../sortMethod')

describe('sortMethod function', () => {
  const arrayTest = [1, 2, 3, 4]
  const arrayExpected = [1, 2, 3, 4]

  it('Should order array', () => {
    expect(arrayTest.sort((a, b) => sortMethod(a, b))).to.deep.equal(arrayExpected)
  })

  it('Should order array asc by default', () => {
    expect(arrayTest.sort((a, b) => sortMethod(a, b))).to.deep.equal(arrayExpected)
    expect(arrayTest.reverse().sort((a, b) => sortMethod(a, b))).to.deep.equal(arrayExpected)
  })

  it('Should order array desc when method is declared', () => {
    expect(arrayTest.sort((a, b) => sortMethod(a, b, 'desc'))).to.deep.equal(arrayExpected.reverse())
    expect(arrayTest.reverse().sort((a, b) => sortMethod(a, b, 'desc'))).to.deep.equal(arrayExpected)
  })
})
