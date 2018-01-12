const makeComparisionOf = require('./makeComparisionOf')

/**
 * This help us to get how many times
 * a number is lower/equal than a entire array of numbers
 * @param {Array} maxes numbers cap
 * @param {Array} numbers collections of numbers to be compared
 * @returns {Array}
 */
const countLowerOrEqual = (maxes, numbers) => {
  return maxes.map(element => {
    return makeComparisionOf(numbers, element)
  })
}

module.exports = countLowerOrEqual
