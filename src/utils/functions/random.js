const randomElements = (arrayElement, limitNumber) => {
  const element = []
  if (arrayElement.length < limitNumber) {
    return arrayElement
  } else {
    for (let article = 0; article < limitNumber; article++) {
      const randomNumber = Math.floor(Math.random() * arrayElement.length)
      const randomElement = arrayElement.splice(randomNumber, 1)
      element.push(randomElement[0])
    }
  }
  return element
}

module.exports = {
  randomElements

}
