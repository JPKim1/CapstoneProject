// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return false
    }
    if (alphabet.length !== 26) {
    return false
    }
    alphabet = alphabet.toLowerCase()
    for (let i = 0; i < alphabet.length; i++) {
      let element = alphabet[i]
      let count = 0
      for (let j = 0; j < alphabet.length; j++) {
        if (element === alphabet[j]) {
          count += 1
        }
        if (count > 1) {
          return false
        }
      }
    }
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    let message = ""
    input = input.toLowerCase()
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        let element = input[i]
        if (!alpha.includes(element)) {
          message += element
        }
        if (alpha.includes(element)) {
          for (let j = 0; j < alpha.length; j++) {
            let letter = alpha[j]
            if (element === letter) {
              element = alphabet[j]
              message += element
              break
            }
          }
        }
      }
    }
    if (!encode) {
      for (let i = 0; i < input.length; i++) {
        let element = input[i]
        if (element === " ") {
          message += element
        } else {
          let index = alphabet.indexOf(element)
          message += alpha[index]
        }
      }
    }
    return message
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
