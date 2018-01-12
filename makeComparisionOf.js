/**
 * This funcition will tell us how many numbers
 * are lower/equal to a element (number)
 * @param {Array} numbers collection of numbers to campare
 * @param {Number} element element to taek as reference for compare
 */
const makeComparisionOf = (numbers, element) => {
  return numbers.reduce((counter, item) => {
    return counter + (item <= element)
  }, 0)
}

module.exports = makeComparisionOf
