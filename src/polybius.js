// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true){

  const polybiusSquare = [
  ["a", "b", "c", "d", "e"],
  ["f", "g", "h", "i/j", "k"],
  ["l", "m", "n", "o", "p"],
  ["q", "r", "s", "t", "u"],
  ["v", "w", "x", "y", "z"]
  ]

  input = input.toLowerCase()
  let message = ""

  if (encode) {
    for (let i = 0; i < input.length; i++) {
      let letter = input[i]
      if (letter === "i" || letter === "j") {
        letter = "i/j"
      }
      if (letter === " ") {
        message += letter
      } else {
        for (let j = 0; j < polybiusSquare.length; j++) {
          let row = polybiusSquare[j]
          let column = row.indexOf(letter)
          if (column !== -1) {
            message += `${column + 1}${j + 1}`
          }
        }
      }
    }
  } else {
    let inputTest = input.split(" ").join("")
    if (inputTest.length % 2 !== 0) {
      return false
    }
    for (let i = 0; i < input.length; i++) {
      let element = input[i]
      if (element === " ") {
        message += element
      }
      let array = []
      let nextElement = input[i + 1]
      if (element !== " ") {
        array.push(element)
        array.push(nextElement)
        let row = polybiusSquare[nextElement - 1]
        let character = row[element - 1]
        message += character
        i++
      }
    }
  }
  return message
}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
