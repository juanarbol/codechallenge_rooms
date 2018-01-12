const sortMethod = (firstNumber, secondNumber, method = 'asc') => {
  if (method === 'asc') {
    return firstNumber - secondNumber
  } else {
    return secondNumber - firstNumber
  }
}

module.exports = sortMethod
